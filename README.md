# Project Title

CitiLab Siemens Interactive Modules


## Dependencies
####there are two dependecies, Jquery and GSAP animation Engine. here are the CDN for them to include at the <head> in your page.

```
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
```

### google analytics code ( this should go inside the head tag of the page)
```
<script type="text/javascript">
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics_debug.js','ga'); // <-- please update the url for the non-debug version
    // use this for the final version:   https://www.google-analytics.com/analytics.js

    ga('create', 'UA-XXXXXXXXXX', 'auto'); // <----- please update the GA tracking-id for final
    ga('set', 'forceSSL', true);
    ga('send', 'pageview');
</script>
```

## Homee Page Animation

this is a linear animation and there are no interactivity. 

### code snippet for the home page module
please update the data-hero-img attribute of div id "hero-animation_container" to where the hero image should live
```
<link rel="stylesheet" href="css/intro-animation.css">
<div id="hero-animation_container" data-hero-img="assets/images/worldmap.png">
    <canvas id="canvas" width="1440" height="100%"></canvas>
    <div id="dom_overlay_container"></div>
    <div class="introCopy">
        <div class="title">Charting a Future to Shared Electric Mobility</div>
        <div class="copy">The electrification of passenger mobility will revolutionize cities. Cleaner air, less congestion, new economic opportunities, and a return to green spaces. But it will take planning and concentrated action to get there.  Change doesn’t come easy.</div>
    </div>
</div>
<script src="js/intro-animation.js"></script>
```




## Built With

* [CodeKit](https://codekitapp.com/) - as the build tool


## Authors
* Project Manager: Elizabeth Line -- <liz.line@digitalcitizen.nyc>
* Developer: Tanvir Haider - <tanvir@willow.studio> 
* Designer: Alison DeBenedictis - <alison@alisondb.com> 

## License

This is a commercial software and can not be used without agreement.
