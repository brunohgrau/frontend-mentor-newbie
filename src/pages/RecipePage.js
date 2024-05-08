import React from "react";
import omlette from "../assets/images/image-omelette.jpeg";

const RecipePage = () => {
  return (
    <>
      <div className=" max-w-4xl m-auto md:w-2/6  md:bg-white md:mt-20 md:my-auto md:mb-0 md:p-8 md:rounded-2xl">
        <img src={omlette} alt="recipe" />
        <div className="px-8 pt-10">
          <div>
            <h1 className="text-4xl font-youngserif">Simple Omlette Recipe</h1>
            <p className=" mt-8 text-base font-outfit">
              {" "}
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="p-6 mt-10 bg-snow">
            <h2 className="text-xl font-outfit font-semibold text-rasberry">
              Preparation time
            </h2>

            <ul className="list-disc mt-4 font-outfit px-6 space-y-2">
              <li>
                {" "}
                <b className="font-semibold">Total: </b> Approximately 10
                minutes
              </li>
              <li>
                {" "}
                <b className="font-semibold">Preparation: </b> 5 minutes
              </li>
              <li>
                {" "}
                <b className="font-semibold">Cooking: </b> 5 minutes{" "}
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-youngserif text-brandy">
              Ingredients
            </h2>
            <ul className="list-disc mt-6 px-6  space-y-3">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li> Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <div className="border-b mt-10 text-brandy"></div>
          <div className="mt-10">
            <h2 className="text-3xl font-youngserif text-brandy ">
              Instructions
            </h2>
            <ol className="list-decimal mt-6 px-5  space-y-3 marker:text-brandy marker:font-semibold">
              <li>
                <b className="font-semibold"> Beat the eggs: </b> In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </li>
              <li>
                <b className="font-semibold">Heat the pan: </b>Place a non-stick
                frying pan over medium heat and add butter or oil.
              </li>
              <li>
                {" "}
                <b className="font-semibold">Cook the omelette: </b>Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li>
                <b className="font-semibold">Add fillings (optional):</b> When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li>
                <b className="font-semibold">Fold and serve: </b> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.+
              </li>
              <li>
                {" "}
                <b className="font-semibold"> Enjoy: </b>Serve hot, with
                additional salt and pepper if needed.
              </li>
            </ol>
          </div>
          <div className="border-b mt-10 text-brandy"></div>
          <div className="mt-10">
            <h2 className="text-3xl font-youngserif text-brandy ">Nutrition</h2>
            <p className=" mt-4 text-base font-outfit">
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>

            <article>
              <ul className="mt-4 font-outfit">
                <li
                  className="flex  items-center justify-around py-2 px-0 border-b
              border-coffe "
                >
                  Calories{" "}
                  <span className="text-brandy font-semibold ">277kcal</span>
                </li>

                <li
                  className="flex  items-center justify-around py-2 px-0 border-b
               border-coffe"
                >
                  Carbs <span className="text-brandy font-semibold ">0g</span>
                </li>

                <li
                  className="flex  items-center justify-around py-2 px-0 border-b
               border-coffe"
                >
                  Protein{" "}
                  <span className="text-brandy font-semibold ">20g</span>
                </li>

                <li
                  className="flex  items-center justify-around py-2 px-0 border-b
               border-coffe"
                >
                  Fat <span className="text-brandy font-semibold ">22g</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
