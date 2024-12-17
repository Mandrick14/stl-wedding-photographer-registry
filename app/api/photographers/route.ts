import { NextResponse } from 'next/server';
import { 
  getAllPhotographers, 
  addPhotographer, 
  updatePhotographer,
  deletePhotographer 
} from '@/lib/photographers';

export async function GET() {
  const photographers = getAllPhotographers();
  return NextResponse.json(photographers);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newPhotographer = addPhotographer(data);
    return NextResponse.json(newPhotographer, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create photographer' },
      { status: 400 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, ...updates } = data;
    
    const updated = updatePhotographer(id, updates);
    if (!updated) {
      return NextResponse.json(
        { error: 'Photographer not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update photographer' },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'ID is required' },
        { status: 400 }
      );
    }
    
    const success = deletePhotographer(id);
    if (!success) {
      return NextResponse.json(
        { error: 'Photographer not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete photographer' },
      { status: 400 }
    );
  }
}