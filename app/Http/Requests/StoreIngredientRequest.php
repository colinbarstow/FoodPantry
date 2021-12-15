<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreIngredientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        return [
            'name'         => 'required|string|unique:ingredients|max:255',
            'description'  => 'required|text',
            'main_image'   => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'banner_image' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'name.required'         => 'A name is required',
            'name.string'           => 'The format for name is incorrect.',
            'name.unique'           => 'There is already an ingredient with this name',
            'name.max'              => 'Exceeds maximum length, 255 characters.',
            'description.required'  => 'A description is required',
            'description.text'      => 'The format for description is incorrect.',
            'main_image.required'   => 'A main image is required',
            'main_image.image'      => 'The file provided is not an image',
            'main_image.mimes'      => 'File type not excepted, please use jpg,png,jpeg,gif,svg',
            'main_image.max'        => 'The image you have uploaded is too large, the maximum size is 2MB',
            'banner_image.required' => 'A banner image is required',
            'banner_image.image'    => 'The file provided is not an image',
            'banner_image.mimes'    => 'File type not excepted, please use jpg,png,jpeg,gif,svg',
            'banner_image.max'      => 'The image you have uploaded is too large, the maximum size is 2MB'
        ];
    }
}
