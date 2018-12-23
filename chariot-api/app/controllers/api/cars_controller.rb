class Api::CarsController < ApplicationController

    def index
        render json: Car.all
    end

    def create
       car = Car.new(car_params)
       if car.save
        render json: car
       else
        render json: { message: car.errors }, status: 400
       end
    end

    def update
        car =
    end


    def show
        render json: Car.find_by(id: params[:id)
    end

    private

    def car_params
        params.require(:car).permit(:name, :price, :img_url, :year)
    end

    def set_car
        @car = Car.find_by(id: params[:id])
    end
end