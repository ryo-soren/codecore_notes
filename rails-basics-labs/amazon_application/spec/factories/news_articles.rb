FactoryBot.define do
    RANDOM_100_CHARS = "hello world hello world hello world hello world hello world hello world hello world hello hello worl hello world hello world"
    factory :news_article do
      sequence(:title) {|n| Faker::Job.title + " #{n}" }
      description {Faker::Job.field + "-#{RANDOM_100_CHARS}"}
    end
  
    # FactoryBot.create(:job_post) #will create and save the object to the db
    # FactoryBot.build(:job_post) #will create the object like .new and will not save it to the db
    # FactoryBot.attributes_for(:job_post) #will generate a job post with only those specific attributes
  
  end
  