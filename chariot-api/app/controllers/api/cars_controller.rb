class Api::CarsController < ApplicationController

    before_action :set_car, only: [:show, :update, :destroy]

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
        if @car.update(car_params)
            render json: @car
        else
            render json: { message: car.errors }, status: 400
        end
    end

    def destroy
        if @car.destroy
            render status: 204
        else
           render json: { message: "Unable to destroy car" }, status: 400
        end
    end

    def show
        render json: @car
    end

    private

    def car_params
        params.require(:car).permit(:name, :price, :img_url, :year)
    end

    def set_car
        @car = Car.find_by(id: params[:id])
    end
end