import time
import csv
from selenium import webdriver
from selenium.webdriver.common.by import By

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
clicked = False
wordFound = False
imageBool = False
while int(presence_time) != end_time: # seconds
    #track time
    current_time = time.time()
    presence_time = current_time - start_time
    print(f"Presence time: {presence_time} seconds")
    print(f"End time: {end_time} seconds")
    time.sleep(2) 

    #github link
    button = driver.find_element(By.CLASS_NAME, value="git_link")

    element = driver.find_element(By.XPATH, "//h2[contains(text(), 'Nature')]")

    image_check = driver.find_element(By.CLASS_NAME, value="img_rite")

    if clicked == False:
        button.click()
        end_time = end_time + 10
        clicked = True

    if wordFound == False:
        if element.text == 'Nature':
            end_time = end_time + 10
            wordFound = True
        
    if imageBool == False:
        if image_check.is_displayed():
            end_time = end_time + 10
            imageBool = True



# Close the browser
driver.quit()
