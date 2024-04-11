
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
clicked = False

while int(presence_time) != end_time: # seconds
    #track time
    current_time = time.time()
    presence_time = current_time - start_time
    print(f"Presence time: {presence_time} seconds")
    print(f"End time: {end_time} seconds")
    time.sleep(5) 

    #github link
    
    try:
        link = driver.find_element(By.TAG_NAME, 'a')

        if clicked == False:
            link.click()
            if link.is_displayed():
                print(f"LINK CLICKED AND TIME EXTENDED")
                end_time = end_time + 10
                clicked = True
    except NoSuchElementException:
        print("Link not found")

# Close the browser
driver.quit()
