class Api::PokemonController < ApplicationController
  def index
    @Pokemon = Pokemon.all
    render :index
  end

  def show
    @Pokemon = Pokemon.find_by(id: params[:id])
    render :show
  end
end
