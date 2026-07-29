<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\SkillCategoryResource;
use App\Models\SkillCategory;

class SkillController extends Controller
{
    public function index()
    {
        $categories = SkillCategory::query()
            ->with('skills')
            ->orderBy('order')
            ->get();

        return SkillCategoryResource::collection($categories);
    }
}
