<?php

namespace App\Http\Requests\Portfolio;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdatePortfolioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->can('update', $this->route('portfolio')) ?? false;
    }

    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'required', 'string', 'max:150'],
            'slug' => [
                'sometimes',
                'required',
                'string',
                'max:170',
                'alpha_dash',
                Rule::unique('portfolios', 'slug')->ignore($this->route('portfolio')),
            ],
            'portfolio_category_id' => ['sometimes', 'required', 'integer', Rule::exists('portfolio_categories', 'id')],
            'description' => ['sometimes', 'required', 'string'],
            'tech_stack' => ['sometimes', 'required', 'array', 'min:1'],
            'tech_stack.*' => ['string', 'max:50'],
            'demo_url' => ['nullable', 'url', 'max:255'],
            'github_url' => ['nullable', 'url', 'max:255'],
            'is_featured' => ['boolean'],
            'order' => ['integer', 'min:0'],
        ];
    }
}
