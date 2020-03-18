class TrainersController < ApplicationController
    def index 
        trainers = Trainer.all
    #     options =
    #         {
    #             include: :pokemons 
    #         }   
    # options[:include] = [:trainers]
        # render json: TrainerSerializer.new(trainers)
    render json: trainers.to_json(:include => {
      :pokemons =>{
        :except =>
          [:updated_at, :created_at]
      }
      }, :except => [:updated_at, :created_at]
      )
    end
end
