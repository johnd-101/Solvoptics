import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  const { id } = await context.params;
  const callId = Number(id);

  try {
    const supportCall = await prisma.supportCall.findUnique({
      where: {
        id: callId,
      },
      include: {
        practice: true,
        user: true,
        notes: true,
      },
    });

    if (!supportCall) {
      return NextResponse.json(
        { error: "Support call not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(supportCall);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to load support call" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  context: RouteContext
) {
  const { id } = await context.params;
  const callId = Number(id);

  try {
    const body = await request.json();

    const supportCall = await prisma.supportCall.update({
      where: {
        id: callId,
      },
      data: {
        practiceId: Number(body.practiceId),
        userId: body.userId
          ? Number(body.userId)
          : null,
        subject: body.subject,
        description: body.description || null,
        priority: body.priority,
        status: body.status,
      },
      include: {
        practice: true,
        user: true,
      },
    });

    return NextResponse.json(supportCall);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update support call" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: RouteContext
) {
  const { id } = await context.params;
  const callId = Number(id);

  try {
    await prisma.supportCall.delete({
      where: {
        id: callId,
      },
    });

    return NextResponse.json({
      message: "Support call deleted",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete support call" },
      { status: 500 }
    );
  }
}