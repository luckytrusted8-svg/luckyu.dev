<?php

namespace App\Http\Requests\About;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAboutRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->hasRole('admin') ?? false;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:150'],
            'description' => ['required', 'string'],
            'years_experience' => ['required', 'integer', 'min:0'],
            'projects_completed' => ['required', 'integer', 'min:0'],
            'happy_clients' => ['required', 'integer', 'min:0'],
            'satisfaction_rate' => ['required', 'integer', 'min:0', 'max:100'],
        ];
    }
}
