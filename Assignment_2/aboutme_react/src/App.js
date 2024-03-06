import logo from './logo.svg';
import './App.css';
import rave from './rave.jpg';

function App() {
  return (
      <body>
        <header>
            <h1>Neiel Delgado</h1>
            <h3>A little about Me</h3>
            <img class="img_rite" src={rave} alt="Rave"/>
        </header>
        <br></br>
        <div class="break">
        </div>
            <div class="right_hobby">
                <h2 class="right_hobby_header">EDM Music</h2>
                <p>I remember playing games on my computer
                    and pulling up some music playlist to "lock in".
                    These playlist were mostly EDM music like dubstep or,
                    house music, so naturally i gained an appreciation towards
                    this genre of music. I love hearing the music at a live event,
                    with all the lights and all the people, its magical and something
                    i recommend for people who want to try it out. My brother was a big influence for my
                    music taste, he also really liked dubstep and we always listen to Daft Punk, a french EDM duo.
                </p>
            </div>
          <div class="left_hobby">
              <h2 >Nature</h2>
              <p>Ever since i was young i have always 
                  loved being outside with nature and
                  appreciating the beauty of our planet. 
                  To appreciate the little things like the 
                  breeze on your face and the way the 
                  leaves rustle with the wind. Going into lakes, swimming,
                  fishing, ive never gone hunting but i would really like to go
                  in order to get closer to nature. We are so dissasociated with how
                  our food gets to our table we often forget that a living thing
                  died in order to give us food.
              </p>

          </div>

          <div class="right_hobby">
              <h2 class="right_hobby_header">Gym</h2>
              <p>I love going to the gym it is therapuetic for me.
                  Once i get in there i feel like nothing else matters but me lifting
                  that weight. I always push myself to do better the next day,
                  and i feel this way of thinking leaks into my everyday life
                  so i push myself harder on something i might not be able to do 
                  and suprise myself when i CAN do it. I like feeling healthy and fit, 
                  I also want to be fit and healthy for my kids and my grandkids so going 
                  to the gym regularly for the rest of my life is one of my goals. There are other things
                  that correlate with the gym like the sauna, steam room, and cold plunges, which are all
                  really good for not only your physical health but your mental health as well.
              </p>
          </div>  

        <div class="gitLink" id="githubbtn">
            <a href="https://github.com/CertifiedForkliftDriver/PlatformComputing/tree/main/aboutMe" target="_blank">Github Link</a>
        </div>

        <footer>
            Neiel Delgado
            <br></br>
            007232726
            <br></br>
            California State University of San Bernardino
            <br></br>
            About Me Page
        </footer>
    </body>
  );
}

export default App;
