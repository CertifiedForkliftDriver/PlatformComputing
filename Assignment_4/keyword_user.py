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
wordFound = False
while int(presence_time) != end_time: # seconds
    #track time
    current_time = time.time()
    presence_time = current_time - start_time
    print(f"Presence time: {presence_time} seconds")
    print(f"End time: {end_time} seconds")
    time.sleep(2) 


    try:
        element = driver.find_element(By.XPATH, "//h2[contains(text(), 'Nature')]")

        if wordFound == False:
            if element == 'Nature':
                end_time = end_time + 10
                wordFound = True
    except NoSuchElementException:
        print("Nature not found")



# Close the browser
driver.quit()
