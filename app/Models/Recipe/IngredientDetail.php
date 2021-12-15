<?php

namespace App\Models\Recipe;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class IngredientDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'ingredient_id',
        'kcal_per_value',
        'fat_per_value',
        'saturates_per_value',
        'carbs_per_value',
        'sugars_per_value',
        'fibre_per_value',
        'protein_per_value',
        'salt_per_value',
        'value_id',
        'value_count',
    ];

    /**
     * Set the Kcal per value attribute
     *
     * @param $value
     */
    public function setKcalPerValueAttribute($value)
    {
        $this->attributes['kcal_per_value'] = $value*100;
    }

    /**
     * Get the Kcal per value attribute
     *
     * @param $value
     * @return float|int
     */
    public function getKcalPerValueAttribute($value)
    {
        return $this->convertNutritionValueToIntOrFloat($value);
    }

    /**
     * Set the fat per value attribute
     *
     * @param $value
     */
    public function setFatPerValueAttribute($value)
    {
        $this->attributes['fat_per_value'] = $value*100;
    }

    /**
     * Get the Fat per value attribute
     *
     * @param $value
     * @return float|int
     */
    public function getFatPerValueAttribute($value)
    {
        return $this->convertNutritionValueToIntOrFloat($value);
    }

    /**
     * Set the saturates per value attribute
     *
     * @param $value
     */
    public function setSaturatesPerValueAttribute($value)
    {
        $this->attributes['saturates_per_value'] = $value*100;
    }

    /**
     * Get the saturates per value attribute
     *
     * @param $value
     * @return float|int
     */
    public function getSaturatesPerValueAttribute($value)
    {
        return $this->convertNutritionValueToIntOrFloat($value);
    }

    /**
     * Set the carbs per value attribute
     *
     * @param $value
     */
    public function setCarbsPerValueAttribute($value)
    {
        $this->attributes['carbs_per_value'] = $value*100;
    }

    /**
     * Get the carbs per value attribute
     *
     * @param $value
     * @return float|int
     */
    public function getCarbsPerValueAttribute($value)
    {
        return $this->convertNutritionValueToIntOrFloat($value);
    }

    /**
     * Set the sugars per value attribute
     *
     * @param $value
     */
    public function setSugarsPerValueAttribute($value)
    {
        $this->attributes['sugars_per_value'] = $value*100;
    }

    /**
     * Get the sugars per value attribute
     *
     * @param $value
     * @return float|int
     */
    public function getSugarsPerValueAttribute($value)
    {
        return $this->convertNutritionValueToIntOrFloat($value);
    }

    /**
     * Set the fibre per value attribute
     *
     * @param $value
     */
    public function setFibrePerValueAttribute($value)
    {
        $this->attributes['fibre_per_value'] = $value*100;
    }

    /**
     * Get the fibre per value attribute
     *
     * @param $value
     * @return float|int
     */
    public function getFibrePerValueAttribute($value)
    {
        return $this->convertNutritionValueToIntOrFloat($value);
    }

    /**
     * Set the protein per value attribute
     *
     * @param $value
     */
    public function setProteinPerValueAttribute($value)
    {
        $this->attributes['protein_per_value'] = $value*100;
    }

    /**
     * Get the protein per value attribute
     *
     * @param $value
     * @return float|int
     */
    public function getProteinPerValueAttribute($value)
    {
        return $this->convertNutritionValueToIntOrFloat($value);
    }

    /**
     * Set the salt per value attribute
     *
     * @param $value
     */
    public function setSaltPerValueAttribute($value)
    {
        $this->attributes['salt_per_value'] = $value*100;
    }

    /**
     * Get the salt per value attribute
     *
     * @param $value
     * @return float|int
     */
    public function getSaltPerValueAttribute($value)
    {
        return $this->convertNutritionValueToIntOrFloat($value);
    }

    /**
     * Return the ingredient relationship
     *
     * @return BelongsTo
     */
    public function ingredient(): BelongsTo
    {
        return $this->belongsTo(Ingredient::class);
    }

    /**
     * @param $value
     * @return float|int
     */
    private function convertNutritionValueToIntOrFloat($value)
    {
        $result = $value/100;
        return is_int($result) ? $result : round($result,2);
    }
}
