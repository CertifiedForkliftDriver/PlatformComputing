import time
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

metrics = []
num_clicks = 0
# Track presence time 
start_time = time.time()
presence_time = start_time
end_time = 10
imageBool = False
while int(presence_time) != end_time: # seconds
    #track time
    current_time = time.time()
    presence_time = current_time - start_time
    print(f"Presence time: {presence_time} seconds")
    print(f"End time: {end_time} seconds")
    time.sleep(2) 

    try:
        images = driver.find_elements(By.TAG_NAME, 'img')

        if imageBool == False:
            print(f"Image count: {len(images)}")
            if len(images) == 1:
                end_time = end_time + end_time
            end_time = end_time * len(images)
            imageBool = True
    except NoSuchElementException:
        print("Images not found")




# Close the browser
driver.quit()
