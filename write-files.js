const fs = require("fs");
const path = require("path");

const BACKEND = "c:/coding.ai/MyProject/luckyu.dev/luckyu-dev-backend/app";
const FRONTEND = "c:/coding.ai/MyProject/luckyu.dev/luckyu-dev-frontend/src";

function w(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
  console.log("WROTE: " + filePath);
}

// ============================================================
// BACKEND — Service Layer
// ============================================================

w(BACKEND + "/Services/ServiceService.php", `<?php

namespace App\\Services;

use App\\Models\\Service;
use Illuminate\\Support\\Facades\\DB;

class ServiceService
{
    public function create(array $data): Service
    {
        return DB::transaction(fn () => Service::create($data));
    }

    public function update(Service $service, array $data): Service
    {
        DB::transaction(fn () => $service->update($data));

        return $service->fresh();
    }

    public function delete(Service $service): void
    {
        DB::transaction(fn () => $service->delete());
    }
}
`);

w(BACKEND + "/Services/SkillService.php", `<?php

namespace App\\Services;

use App\\Models\\Skill;
use Illuminate\\Support\\Facades\\DB;

class SkillService
{
    public function create(array $data): Skill
    {
        return DB::transaction(fn () => Skill::create($data));
    }

    public function update(Skill $skill, array $data): Skill
    {
        DB::transaction(fn () => $skill->update($data));

        return $skill->fresh();
    }

    public function delete(Skill $skill): void
    {
        DB::transaction(fn () => $skill->delete());
    }
}
`);

w(BACKEND + "/Services/BlogPostService.php", `<?php

namespace App\\Services;

use App\\Models\\BlogPost;
use Illuminate\\Http\\UploadedFile;
use Illuminate\\Support\\Facades\\DB;

class BlogPostService
{
    public function create(array $data): BlogPost
    {
        return DB::transaction(fn () => BlogPost::create($data));
    }

    public function update(BlogPost $blogPost, array $data): BlogPost
    {
        DB::transaction(fn () => $blogPost->update($data));

        return $blogPost->fresh();
    }

    public function delete(BlogPost $blogPost): void
    {
        DB::transaction(fn () => $blogPost->delete());
    }

    public function attachCoverImage(BlogPost $blogPost, UploadedFile $file): void
    {
        $blogPost->addMedia($file)->toMediaCollection('cover_image');
    }
}
`);

// ============================================================
// BACKEND — Form Requests
// ============================================================

w(BACKEND + "/Http/Requests/Service/StoreServiceRequest.php", `<?php

namespace App\\Http\\Requests\\Service;

use Illuminate\\Foundation\\Http\\FormRequest;
use Illuminate\\Validation\\Rule;

class StoreServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasRole('admin') ?? false;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:150'],
            'slug' => ['required', 'string', 'max:170', 'alpha_dash', Rule::unique('services', 'slug')],
            'short_description' => ['nullable', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'icon' => ['required', 'string', 'max:100'],
            'is_featured' => ['boolean'],
            'order' => ['integer', 'min:0'],
            'status' => ['required', 'string', 'in:active,draft'],
        ];
    }
}
`);

w(BACKEND + "/Http/Requests/Service/UpdateServiceRequest.php", `<?php

namespace App\\Http\\Requests\\Service;

use Illuminate\\Foundation\\Http\\FormRequest;
use Illuminate\\Validation\\Rule;

class UpdateServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasRole('admin') ?? false;
    }

    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'string', 'max:150'],
            'slug' => ['sometimes', 'string', 'max:170', 'alpha_dash', Rule::unique('services', 'slug')->ignore($this->service)],
            'short_description' => ['nullable', 'string', 'max:255'],
            'description' => ['sometimes', 'string'],
            'icon' => ['sometimes', 'string', 'max:100'],
            'is_featured' => ['boolean'],
            'order' => ['integer', 'min:0'],
            'status' => ['sometimes', 'string', 'in:active,draft'],
        ];
    }
}
`);

w(BACKEND + "/Http/Requests/Skill/StoreSkillRequest.php", `<?php

namespace App\\Http\\Requests\\Skill;

use Illuminate\\Foundation\\Http\\FormRequest;
use Illuminate\\Validation\\Rule;

class StoreSkillRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasRole('admin') ?? false;
    }

    public function rules(): array
    {
        return [
            'skill_category_id' => ['required', 'integer', Rule::exists('skill_categories', 'id')],
            'name' => ['required', 'string', 'max:100'],
            'proficiency' => ['required', 'integer', 'min:0', 'max:100'],
            'icon' => ['nullable', 'string', 'max:100'],
            'color' => ['nullable', 'string', 'max:20'],
            'display_order' => ['integer', 'min:0'],
            'status' => ['required', 'string', 'in:active,draft'],
        ];
    }
}
`);

w(BACKEND + "/Http/Requests/Skill/UpdateSkillRequest.php", `<?php

namespace App\\Http\\Requests\\Skill;

use Illuminate\\Foundation\\Http\\FormRequest;
use Illuminate\\Validation\\Rule;

class UpdateSkillRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasRole('admin') ?? false;
    }

    public function rules(): array
    {
        return [
            'skill_category_id' => ['sometimes', 'integer', Rule::exists('skill_categories', 'id')],
            'name' => ['sometimes', 'string', 'max:100'],
            'proficiency' => ['sometimes', 'integer', 'min:0', 'max:100'],
            'icon' => ['nullable', 'string', 'max:100'],
            'color' => ['nullable', 'string', 'max:20'],
            'display_order' => ['integer', 'min:0'],
            'status' => ['sometimes', 'string', 'in:active,draft'],
        ];
    }
}
`);

w(BACKEND + "/Http/Requests/Blog/StoreBlogPostRequest.php", `<?php

namespace App\\Http\\Requests\\Blog;

use Illuminate\\Foundation\\Http\\FormRequest;
use Illuminate\\Validation\\Rule;

class StoreBlogPostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasRole('admin') ?? false;
    }

    public function rules(): array
    {
        return [
            'blog_category_id' => ['required', 'integer', Rule::exists('blog_categories', 'id')],
            'title' => ['required', 'string', 'max:200'],
            'slug' => ['required', 'string', 'max:220', 'alpha_dash', Rule::unique('blog_posts', 'slug')],
            'excerpt' => ['required', 'string', 'max:500'],
            'content' => ['required', 'string'],
            'published_at' => ['nullable', 'date'],
            'meta_title' => ['nullable', 'string', 'max:200'],
            'meta_description' => ['nullable', 'string', 'max:300'],
            'status' => ['required', 'string', 'in:draft,published'],
        ];
    }
}
`);

w(BACKEND + "/Http/Requests/Blog/UpdateBlogPostRequest.php", `<?php

namespace App\\Http\\Requests\\Blog;

use Illuminate\\Foundation\\Http\\FormRequest;
use Illuminate\\Validation\\Rule;

class UpdateBlogPostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasRole('admin') ?? false;
    }

    public function rules(): array
    {
        return [
            'blog_category_id' => ['sometimes', 'integer', Rule::exists('blog_categories', 'id')],
            'title' => ['sometimes', 'string', 'max:200'],
            'slug' => ['sometimes', 'string', 'max:220', 'alpha_dash', Rule::unique('blog_posts', 'slug')->ignore($this->blogPost)],
            'excerpt' => ['sometimes', 'string', 'max:500'],
            'content' => ['sometimes', 'string'],
            'published_at' => ['nullable', 'date'],
            'meta_title' => ['nullable', 'string', 'max:200'],
            'meta_description' => ['nullable', 'string', 'max:300'],
            'status' => ['sometimes', 'string', 'in:draft,published'],
        ];
    }
}
`);

w(BACKEND + "/Http/Requests/About/UpdateStatisticsRequest.php", `<?php

namespace App\\Http\\Requests\\About;

use Illuminate\\Foundation\\Http\\FormRequest;

class UpdateStatisticsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasRole('admin') ?? false;
    }

    public function rules(): array
    {
        return [
            'projects_completed' => ['sometimes', 'integer', 'min:0'],
            'happy_clients' => ['sometimes', 'integer', 'min:0'],
            'years_experience' => ['sometimes', 'integer', 'min:0'],
            'satisfaction_rate' => ['sometimes', 'integer', 'min:0', 'max:100'],
        ];
    }
}
`);

// ============================================================
// BACKEND — Updated Resources
// ============================================================

w(BACKEND + "/Http/Resources/ServiceResource.php", `<?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

/** @mixin \\App\\Models\\Service */
class ServiceResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'short_description' => $this->short_description,
            'description' => $this->description,
            'icon' => $this->icon,
            'is_featured' => $this->is_featured,
            'order' => $this->order,
            'status' => $this->status,
        ];
    }
}
`);

w(BACKEND + "/Http/Resources/SkillResource.php", `<?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

/** @mixin \\App\\Models\\Skill */
class SkillResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'proficiency' => $this->proficiency,
            'icon' => $this->icon,
            'color' => $this->color,
            'display_order' => $this->display_order,
            'status' => $this->status,
        ];
    }
}
`);

w(BACKEND + "/Http/Resources/SkillCategoryResource.php", `<?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

/** @mixin \\App\\Models\\SkillCategory */
class SkillCategoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'skills' => SkillResource::collection($this->whenLoaded('skills')),
        ];
    }
}
`);

w(BACKEND + "/Http/Resources/PortfolioResource.php", `<?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

/** @mixin \\App\\Models\\Portfolio */
class PortfolioResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'category' => new PortfolioCategoryResource($this->whenLoaded('category')),
            'tech_stack' => $this->tech_stack,
            'demo_url' => $this->demo_url,
            'github_url' => $this->github_url,
            'is_featured' => $this->is_featured,
            'completed_at' => $this->completed_at?->toDateString(),
            'status' => $this->status,
            'thumbnail' => $this->getFirstMedia('thumbnail')
                ? new MediaResource($this->getFirstMedia('thumbnail'))
                : null,
            'gallery' => MediaResource::collection($this->getMedia('gallery')),
        ];
    }
}
`);

w(BACKEND + "/Http/Resources/BlogPostResource.php", `<?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

/** @mixin \\App\\Models\\BlogPost */
class BlogPostResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'category' => new BlogCategoryResource($this->whenLoaded('category')),
            'excerpt' => $this->excerpt,
            'content' => $this->when($request->routeIs('*.show'), $this->content),
            'cover_image' => $this->getFirstMedia('cover_image')
                ? new MediaResource($this->getFirstMedia('cover_image'))
                : null,
            'published_at' => $this->published_at?->toIso8601String(),
            'meta_title' => $this->meta_title,
            'meta_description' => $this->meta_description,
            'status' => $this->status,
        ];
    }
}
`);

w(BACKEND + "/Http/Resources/StatisticsResource.php", `<?php

namespace App\\Http\\Resources;

use Illuminate\\Http\\Request;
use Illuminate\\Http\\Resources\\Json\\JsonResource;

/** @mixin \\App\\Models\\About */
class StatisticsResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'projects_completed' => $this->projects_completed,
            'happy_clients' => $this->happy_clients,
            'years_experience' => $this->years_experience,
            'satisfaction_rate' => $this->satisfaction_rate,
        ];
    }
}
`);

// ============================================================
// BACKEND — Admin Controllers
// ============================================================

w(BACKEND + "/Http/Controllers/Api/Admin/ServiceController.php", `<?php

namespace App\\Http\\Controllers\\Api\\Admin;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\Service\\StoreServiceRequest;
use App\\Http\\Requests\\Service\\UpdateServiceRequest;
use App\\Http\\Resources\\ServiceResource;
use App\\Models\\Service;
use App\\Services\\ServiceService;
use Illuminate\\Http\\Request;

class ServiceController extends Controller
{
    public function __construct(private readonly ServiceService $serviceService)
    {
    }

    public function index(Request $request)
    {
        $services = Service::query()
            ->when($request->query('search'), function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->when($request->query('status'), function ($query, $status) {
                $query->where('status', $status);
            })
            ->orderBy('order')
            ->paginate(15);

        return ServiceResource::collection($services);
    }

    public function store(StoreServiceRequest $request)
    {
        $service = $this->serviceService->create($request->validated());

        return new ServiceResource($service);
    }

    public function show(Service $service)
    {
        return new ServiceResource($service);
    }

    public function update(UpdateServiceRequest $request, Service $service)
    {
        $updated = $this->serviceService->update($service, $request->validated());

        return new ServiceResource($updated);
    }

    public function destroy(Service $service)
    {
        $this->serviceService->delete($service);

        return response()->noContent();
    }
}
`);

w(BACKEND + "/Http/Controllers/Api/Admin/SkillController.php", `<?php

namespace App\\Http\\Controllers\\Api\\Admin;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\Skill\\StoreSkillRequest;
use App\\Http\\Requests\\Skill\\UpdateSkillRequest;
use App\\Http\\Resources\\SkillResource;
use App\\Models\\Skill;
use App\\Services\\SkillService;
use Illuminate\\Http\\Request;

class SkillController extends Controller
{
    public function __construct(private readonly SkillService $skillService)
    {
    }

    public function index(Request $request)
    {
        $skills = Skill::query()
            ->with('category')
            ->when($request->query('search'), function ($query, $search) {
                $query->where('name', 'like', "%{$search}%");
            })
            ->when($request->query('status'), function ($query, $status) {
                $query->where('status', $status);
            })
            ->orderBy('display_order')
            ->paginate(15);

        return SkillResource::collection($skills);
    }

    public function store(StoreSkillRequest $request)
    {
        $skill = $this->skillService->create($request->validated());

        return new SkillResource($skill);
    }

    public function show(Skill $skill)
    {
        return new SkillResource($skill->load('category'));
    }

    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        $updated = $this->skillService->update($skill, $request->validated());

        return new SkillResource($updated->load('category'));
    }

    public function destroy(Skill $skill)
    {
        $this->skillService->delete($skill);

        return response()->noContent();
    }
}
`);

w(BACKEND + "/Http/Controllers/Api/Admin/BlogPostController.php", `<?php

namespace App\\Http\\Controllers\\Api\\Admin;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\Blog\\StoreBlogPostRequest;
use App\\Http\\Requests\\Blog\\UpdateBlogPostRequest;
use App\\Http\\Resources\\BlogPostResource;
use App\\Models\\BlogPost;
use App\\Services\\BlogPostService;
use Illuminate\\Http\\Request;

class BlogPostController extends Controller
{
    public function __construct(private readonly BlogPostService $blogPostService)
    {
    }

    public function index(Request $request)
    {
        $posts = BlogPost::query()
            ->with('category')
            ->when($request->query('search'), function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->when($request->query('status'), function ($query, $status) {
                $query->where('status', $status);
            })
            ->latest()
            ->paginate(15);

        return BlogPostResource::collection($posts);
    }

    public function store(StoreBlogPostRequest $request)
    {
        $post = $this->blogPostService->create($request->validated());

        return new BlogPostResource($post->load('category'));
    }

    public function show(BlogPost $blogPost)
    {
        return new BlogPostResource($blogPost->load(['category', 'media']));
    }

    public function update(UpdateBlogPostRequest $request, BlogPost $blogPost)
    {
        $updated = $this->blogPostService->update($blogPost, $request->validated());

        return new BlogPostResource($updated->load(['category', 'media']));
    }

    public function destroy(BlogPost $blogPost)
    {
        $this->blogPostService->delete($blogPost);

        return response()->noContent();
    }

    public function uploadCoverImage(Request $request, BlogPost $blogPost)
    {
        $request->validate([
            'file' => ['required', 'image', 'max:5120'],
        ]);

        $this->blogPostService->attachCoverImage($blogPost, $request->file('file'));

        return new BlogPostResource($blogPost->fresh(['category', 'media']));
    }
}
`);

w(BACKEND + "/Http/Controllers/Api/Admin/StatisticsController.php", `<?php

namespace App\\Http\\Controllers\\Api\\Admin;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Requests\\About\\UpdateStatisticsRequest;
use App\\Http\\Resources\\StatisticsResource;
use App\\Models\\About;

class StatisticsController extends Controller
{
    public function show()
    {
        $about = About::query()->firstOrNew();

        return new StatisticsResource($about);
    }

    public function update(UpdateStatisticsRequest $request)
    {
        $about = About::query()->firstOrNew();
        $about->fill($request->validated())->save();

        return new StatisticsResource($about);
    }
}
`);

// ============================================================
// BACKEND — Public Statistics Controller
// ============================================================

w(BACKEND + "/Http/Controllers/Api/Public/StatisticsController.php", `<?php

namespace App\\Http\\Controllers\\Api\\Public;

use App\\Http\\Controllers\\Controller;
use App\\Http\\Resources\\StatisticsResource;
use App\\Models\\About;

class StatisticsController extends Controller
{
    public function show()
    {
        $about = About::query()->firstOrNew();

        return new StatisticsResource($about);
    }
}
`);

console.log("\\n=== ALL BACKEND FILES WRITTEN ===");