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
  const taskId = Number(id);

  try {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
      include: {
        user: true,
      },
    });

    if (!task) {
      return NextResponse.json(
        { error: "Task not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
  } catch {
    return NextResponse.json(
      { error: "Failed to load task" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  context: RouteContext
) {
  const { id } = await context.params;
  const taskId = Number(id);

  try {
    const body = await request.json();

    const task = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        userId: Number(body.userId),
        title: body.title,
        description: body.description || null,
        priority: body.priority,
        status: body.status,
        dueDate: body.dueDate
          ? new Date(body.dueDate)
          : null,
      },
    });

    return NextResponse.json(task);
  } catch {
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  context: RouteContext
) {
  const { id } = await context.params;
  const taskId = Number(id);

  try {
    await prisma.task.delete({
      where: {
        id: taskId,
      },
    });

    return NextResponse.json({
      message: "Task deleted",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: 500 }
    );
  }
}