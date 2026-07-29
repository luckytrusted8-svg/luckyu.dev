<?php

namespace Tests\Feature\Api;

use App\Models\Portfolio;
use App\Models\PortfolioCategory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PortfolioTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_can_list_portfolios(): void
    {
        $category = PortfolioCategory::factory()->create();
        Portfolio::factory()->count(3)->create(['portfolio_category_id' => $category->id]);

        $response = $this->getJson('/api/portfolios');

        $response->assertOk()->assertJsonCount(3, 'data');
    }

    public function test_public_can_view_single_portfolio_by_slug(): void
    {
        $portfolio = Portfolio::factory()->create(['slug' => 'test-project']);

        $response = $this->getJson('/api/portfolios/test-project');

        $response->assertOk()->assertJsonPath('data.slug', 'test-project');
    }

    public function test_guest_cannot_create_portfolio(): void
    {
        $response = $this->postJson('/api/admin/portfolios', [
            'title' => 'New Project',
        ]);

        $response->assertUnauthorized();
    }
}
