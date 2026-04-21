<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();

        return response()->json($projects);
    }

    public function store(Request $request)
    {

        if (! $newProject = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'stack' => 'required|string',
        ])) {
            return response()->json(['message' => 'Invalid Data', 'isAdded' => false], 422);
        }

        try {

            $prjct = Project::create($newProject);
            return response()->json(['message' => 'Project added successfully', 'isAdded' => true, 'newProject' => $prjct], 201);
            
        } catch (\Exception) {
            return response()->json(['message' => 'Something went wrong', 'isAdded' => false], 500);
        }
    }

    public function delete(Request $request){
        $project = Project::findOrFail($request->id);
        $project->delete();
        return response()->json(['message' => 'Project deleted successfully'], 200);
    }
}
