<?php

namespace App\Http\Controllers\Recipe;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreIngredientRequest;
use App\Models\Recipe\Diet;
use App\Models\Recipe\Ingredient;
use App\Models\Recipe\IngredientGroup;
use App\Repository\IngredientDetailInterface;
use App\Repository\IngredientInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class IngredientController extends Controller
{
    /**
     * @var IngredientInterface
     */
    private $ingredientRepository;

    /**
     * @var $ingredientGroups
     */
    private $ingredientGroups;

    /**
     * @var $diets
     */
    private $diets;

    /**
     * @param IngredientInterface $ingredientRepository
     */
    public function __construct(
        IngredientInterface $ingredientRepository
    )
    {
        $this->ingredientRepository = $ingredientRepository;
        $this->ingredientGroups     = IngredientGroup::all();
        $this->diets                = Diet::all();
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index()
    {
        $ingredients = $this->ingredientRepository->all();
        return view('admin.pages.ingredients.index' ,compact('ingredients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $ingredientGroups = $this->ingredientGroups;
        $diets            = $this->diets;
        return view('admin.pages.ingredients.create', compact('ingredientGroups', 'diets'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreIngredientRequest $request
     * @return Model|null
     */
    public function store(StoreIngredientRequest $request): ?Model
    {
        $ingredient = $this->ingredientRepository->create($request->all());
        $ingredient->ingredientDetails()->create($request->all() + ['ingredient_id' => $ingredient->id]);
        $ingredient->ingredientGroups()->sync($request->ingredient_groups);
        $ingredient->diets()->sync($request->diets);

        return $ingredient->fresh();
    }

    /**
     * Display the specified resource.
     *
     * @param Ingredient $ingredient
     * @return Application|Factory|View
     */
    public function show(Ingredient $ingredient)
    {
        return view('admin.pages.ingredients.show', compact('ingredient'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Ingredient $ingredient
     * @return Application|Factory|View
     */
    public function edit(Ingredient $ingredient)
    {
        $ingredientGroups = $this->ingredientGroups;
        $diets            = $this->diets;
        return view('admin.pages.ingredients.edit', compact('ingredient','ingredientGroups', 'diets'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Ingredient $ingredient
     * @return Ingredient|null
     */
    public function update(Request $request, Ingredient $ingredient): ?Ingredient
    {
        $this->ingredientRepository->update($ingredient->id, $request->all());
        $ingredient->ingredientDetails()->update($request->all());
        $ingredient->ingredientGroups()->sync($request->ingredient_groups);
        $ingredient->diets()->sync($request->diets);

        return $ingredient->fresh();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Ingredient $ingredient
     * @return Response
     */
    public function destroy(Ingredient $ingredient)
    {

    }
}
