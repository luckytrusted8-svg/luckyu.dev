<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\BlogPost;
use App\Models\ContactMessage;
use App\Models\Portfolio;

class DashboardController extends Controller
{
    public function summary()
    {
        return response()->json([
            'unread_messages' => ContactMessage::where('is_read', false)->count(),
            'total_portfolios' => Portfolio::count(),
            'total_blog_posts' => BlogPost::whereNotNull('published_at')->count(),
        ]);
    }
}
