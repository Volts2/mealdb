import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";
import NotFound from "../../components/NotFound/NotFound";
import MealList from "../../components/Meal/MealList";
import FoodJoke from '../../components/spooncular/FoodJoke';
import FoodTrivia from '../../components/spooncular/FoodTrivia';

const HomePage = () => {
  const {categories, meals, categoryLoading, mealsLoading} = useMealContext();

  return (
    <main className='main-content'>
      <div className='Joking'>
        <FoodJoke/>
      </div>
      <div className='Trivia'>
        <FoodTrivia/>
      </div>
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }

      <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">The Team Behind CapyMealPlan</h2>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src="https://okm2jw.csb.app/images/Aziz.png" className="team-img" alt="pic" />
              <h3>Muhammad Aziz Baihaqi</h3>
              <div className="team-info">
                <p>NIM: 00000075248</p>
              </div>
              <p>
                Yah Begitulah Belum Nembak Tapi Udah Ditolak
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src="https://okm2jw.csb.app/images/jojo.png" className="team-img" alt="pic" />
              <h3>Joshua Jonathan</h3>
              <div className="team-info">
                <p>NIM: 00000074760</p>
              </div>

              <p>
                Mau Cosplay Jadi Munir
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                src="https://aktual.com/wp-content/uploads/2021/07/Firaun-dalam-alquran-bag-2-1.jpg"
                className="team-img"
                alt="pic"
              />
              <h3>Daffi Bintang Firdaus</h3>
              <div className="team-info">
                <p>NIM: 00000073602</p>
              </div>

              <p>
                I love my Gf (She is My sister)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  )
}

export default HomePage;
