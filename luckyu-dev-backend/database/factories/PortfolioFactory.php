<?php

namespace Database\Factories;

use App\Models\PortfolioCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class PortfolioFactory extends Factory
{
    public function definition(): array
    {
        $title = $this->faker->unique()->catchPhrase();

        return [
            'title' => $title,
            'slug' => Str::slug($title).'-'.$this->faker->unique()->numberBetween(1, 99999),
            'portfolio_category_id' => PortfolioCategory::factory(),
            'description' => $this->faker->paragraph(),
            'tech_stack' => $this->faker->randomElements(
                ['Next.js', 'Laravel', 'React', 'TypeScript', 'MySQL', 'Tailwind'],
                3
            ),
            'demo_url' => $this->faker->url(),
            'github_url' => $this->faker->url(),
            'is_featured' => $this->faker->boolean(),
            'order' => $this->faker->numberBetween(0, 100),
        ];
    }
}
