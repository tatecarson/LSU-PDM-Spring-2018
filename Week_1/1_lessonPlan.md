# Audio assignment 1 notes

* begining announcements
  * trouble including tone?
  * CDN: another option to include
    * <https://cdnjs.cloudflare.com/ajax/libs/tone/0.11.0/Tone.min.js>
    * <https://cdnjs.com/libraries/p5.js>
    * downsides are that this will only work when connected to internet
    * very good idea if the site is ever hosted online
    * very fast download for user
    * will always have the most updated version of library
  * Tone.Editor
    * <https://github.com/willurmston/Tone.Editor>
    * some things are broken but still useful for testing out parameters
* example 1:
  * [Including tone](./1_includingTone_FINISHED/index.html)
  * include p5.dom in html file
  * grab sound file
    * [freesound](http://www.freesound.org)
    * [Macaulay Library](https://www.macaulaylibrary.org/#_ga=2.227816093.1451042078.1519181247-355812784.1519181247)
  * not all file formats - wav is fine for offline, mp3 is best for online and mobile
    * [Supported media formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
    * convert file with 
      * [Online audio converter](https://online-audio-converter.com/) - in the browser 
      * [lame](http://lame.sourceforge.net/download.php) - convert to mp3 in the terminal
  * add to sound to samples folder
  * show playing one file
  * add button from p5.dom
  * also see:
    * <https://tonejs.github.io/docs/r11/Sampler>
      * useful for making sampler instruments
    * <https://tonejs.github.io/docs/r11/Players>
      * useful for grouping together like sounds
* example 2: add ability to play multiple files
  * 3_TonePlayersMultisample_START
  * add multiple Tone.Player objects together
  * add buttons to play each file
* example 3: add effects to each 
  * give an overview of effects from the API
  * add effects to each file
  * add ways to control each effect
  * add labels

