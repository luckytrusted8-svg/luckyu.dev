<?php

namespace App\Http\Controllers\Api\Public;

use App\Http\Controllers\Controller;
use App\Http\Resources\BlogPostResource;
use App\Models\BlogPost;
use Illuminate\Http\Request;

class BlogPostController extends Controller
{
    public function index(Request $request)
    {
        $posts = BlogPost::query()
            ->with('category')
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->when($request->query('category'), function ($query, $categorySlug) {
                $query->whereHas('category', fn ($q) => $q->where('slug', $categorySlug));
            })
            ->latest('published_at')
            ->paginate(9);

        return BlogPostResource::collection($posts);
    }

    public function show(BlogPost $blogPost)
    {
        abort_unless(
            $blogPost->published_at && $blogPost->published_at->lessThanOrEqualTo(now()),
            404
        );

        return new BlogPostResource($blogPost->load(['category', 'media']));
    }
}
