# CitiLab Siemens Interactive Modules


#### Dependencies
there are total of 8 external files that needs to be placed in the head tag please
```
    <link rel="stylesheet" href="css/graph-min.css">
    <link rel="stylesheet" href="css/intro-animation.css">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
    <script src="js/graph-parking.js"></script>
    <script src="js/graph-charge.js"></script>
    <script src="js/graph-emmissions.js"></script>
    <script src="js/intro-animation.js"></script>
   
```

#### google analytics code ( this should go inside the <head> tag of the page)
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

### Home Page Animation

this is a linear animation and there are no interactivity. 

#### code snippet for the home page module
please update the data-hero-img attribute of div id "hero-animation_container" to where the hero image should live
```
<div id="hero-animation_container" data-hero-img="assets/images/worldmap.png">
    <canvas id="canvas" width="1440" height="100%"></canvas>
    <div id="dom_overlay_container"></div>
    <div class="introCopy">
        <div class="title">Charting a Future to Shared Electric Mobility</div>
        <div class="copy">The electrification of passenger mobility will revolutionize cities. Cleaner air, less congestion, new economic opportunities, and a return to green spaces. But it will take planning and concentrated action to get there.  Change doesn’t come easy.</div>
    </div>
</div>
```

### Parking Graph
#### (LA) code snippet for parking graph module
```
    <div class="graph-parking" id="graph-parking-la">
        <div id="graph-content">
            <div id="grid"></div>
            <div class="nav"><div class="nav-year" id="nav-0">2018</div><div class="nav-year" id="nav-1">2035</div><div class="nav-year" id="nav-2">2050</div></div>
            <div class="hint">SELECT A YEAR TO VISUALIZE THE CHANGE IN LAND USE OVER TIME</div>
        </div>
        <div id="graph-copy">
            <div class="graph-content">
                <p>In a city like LA, with 18.6 million parking spaces, the space reclaimed from just parking alone could create more than 500,000 new homes. If you combined all of these parking spaces into one giant, circular parking lot, it would be roughly the distance from Downtown LA to Santa Monica, or the space of about 25 Central Parks.</p>
                <div class="legend">SCALE</br>1 VEHICLE = 100 PARKING SPACES</div>
            </div>
        </div>
    </div>

    <script>
        initParkingGraph ({
            container: "#graph-parking-la",
            location: "la",
            defaultindex: 0
        });
    </script>
```

#### (MUMBAI) code snippet for parking graph module
```
   <div class="graph-parking" id="graph-parking-mumbai">
        <div id="graph-content">
            <div id="grid"></div>
            <div class="nav"><div class="nav-year" id="nav-0">2018</div><div class="nav-year" id="nav-1">2035</div><div class="nav-year" id="nav-2">2050</div></div>
            <div class="hint">SELECT A YEAR TO VISUALIZE THE CHANGE IN LAND USE OVER TIME</div>
        </div>
        <div id="graph-copy">
            <div class="graph-content">
                <p>Siemens predicts a 24 percent decrease in number of parking spaces needed for cars by 2035, and a 50 percent decrease by 2050.</p>
                <p>This could mean space for over 600,000 new homes or over 390 million square feet for urban parkland—roughly the same amount of space as about 29,000 Olympic-sized swimming pools.</p>
                <div class="legend">SCALE</br>1 VEHICLE = 100 PARKING SPACES</div>
            </div>
        </div>
    </div>

    <script>
        initParkingGraph ({
            container: "#graph-parking-mumbai",
            location: "mumbai",
            defaultindex: 0
        });
    </script>
```

#### (LONDON) code snippet for parking graph module
```
   <div class="graph-parking" id="graph-parking-london">
        <div id="graph-content">
            <div id="grid"></div>
            <div class="nav"><div class="nav-year" id="nav-0">2018</div><div class="nav-year" id="nav-1">2035</div><div class="nav-year" id="nav-2">2050</div></div>
            <div class="hint">SELECT A YEAR TO VISUALIZE THE CHANGE IN LAND USE OVER TIME</div>
        </div>
        <div id="graph-copy">
            <div class="graph-content">
                <p>At present, the land occupied by parking in HIHD cities  like London could fit almost 3 million homes. Parked alongside one another, the amount of space taken up by parking in a city like London could make up the entire city of Boston proper.</p>
                <p id="content-2050">As eMobility takes hold, by 2050 the parking spaces reclaimed could fit close to 900,000 new homes, or 700 million square feet in urban parkland. That’s about the space of 12,000 football fields.</p>
                <div class="legend">SCALE</br>1 VEHICLE = 100 PARKING SPACES</div>
            </div>
        </div>
    </div>

    <script>
        initParkingGraph ({
            container: "#graph-parking-london",
            location: "london",
            defaultindex: 0
        });
    </script>
```

### Emission Graph
#### (LA) code snippet for Emission graph module
```
 <div class="graph-emissions" id="graph-emissions-la">
            <div class="content">
                <div class="electricity">
                    <div class="chart-container">
                        <div class="title">Electricity Demand</div>
                        <div class="chart">
                            <div class='tooltip'>description of electricity source or factoid to go here</div>
                            <div class="bar-sets">
                                <div class="vertical-legend">
                                    <div class="legend-copy">percentage increase</div>
                                    <div class="legend-val">
                                        <div class="legend-val-item">0</div>
                                        <div class="legend-val-item">20</div>
                                        <div class="legend-val-item">40</div>
                                        <div class="legend-val-item">60</div>
                                        <div class="legend-val-item">100</div>
                                    </div>
                                    <div class="line"></div>
                                </div>
                                <div class="bar-content">
                                    <div id="bar-0" class="bar">
                                        <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                        <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                        <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                        <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                        <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                    </div>
                                    <div id="bar-1" class="bar">
                                        <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                        <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                        <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                        <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                        <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                    </div>
                                    <div id="bar-2" class="bar">
                                        <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                        <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                        <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                        <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                        <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="chart-legends">
                                <div class="devider-line"></div>
                                <div class="years">
                                    <div class="year" id="year-0">2018</div>
                                    <div class="year" id="year-1">2035</div>
                                    <div class="year" id="year-2">2050</div>
                                </div>
                            </div>
                        </div>
                        <div id='legends-electric' class="legends">
                            <div id="box-0" class="each-legend mainColor box-oil">Oil</div>
                            <div id="box-1" class="each-legend mainColor box-nuclear">Nuclear</div>
                            <div id="box-2" class="each-legend mainColor box-coal">Coal</div>
                            <div id="box-3" class="each-legend mainColor box-gas">Gas</div>
                            <div id="box-4" class="each-legend mainColor box-hydro">Hydro</div>
                            <div id="box-5" class="each-legend mainColor box-solar">Solar</div>
                            <div id="box-6" class="each-legend mainColor box-wind">Wind</div>
                        </div>
                    </div>
                </div>
                <div class="emmissions">
                    <div class="chart-container">
                        <div class="title">Emissions Reduction</div>
                        <div class="chart">
                            <div class='tooltip'>description of electricity source or factoid to go here</div>
                            <div class="bar-sets">
                                    <div class="vertical-legend">
                                        <div class="legend-copy">percentage decrease</div>
                                        <div class="legend-val">
                                            <div class="legend-val-item">0</div>
                                            <div class="legend-val-item">20</div>
                                            <div class="legend-val-item">40</div>
                                            <div class="legend-val-item">60</div>
                                            <div class="legend-val-item">100</div>
                                        </div>
                                        <div class="line"></div>
                                    </div>
                                <div class="bar-content">
                                    <div id="bar-0" class="bar">
                                            <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                            <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                            <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                        </div>
                                        <div id="bar-1" class="bar">
                                            <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                            <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                            <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                        </div>
                                        <div id="bar-2" class="bar">
                                            <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                            <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                            <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                        </div>
                                </div>
                            </div>
                            <div class="chart-legends">
                                <div class="devider-line"></div>
                                <div class="years">
                                    <div class="year" id="year-0">2018</div>
                                    <div class="year" id="year-1">2035</div>
                                    <div class="year" id="year-2">2050</div>
                                </div>
                            </div>
                        </div>
                        <div id='legends-emmissions' class="legends">
                            <div id="box-0" class="each-legend box-pm">PM</div>
                            <div id="box-1" class="each-legend box-no">NO</div>
                            <div id="box-2" class="each-legend box-ghgas">GH Gas</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="caption">
                <div class="original-copy"><p>Los Angeles is the American city with the most polluted ozone in 2018. In LA County, around 15 percent of children have lifetime asthma, and LA gas prices are almost consistently above the national average.</p></div>
                <div class="rollover-copy">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
        </div>

    <script>
        initEmmissionsGraph ({
            container: "#graph-emissions-la",
            location: "la"
        });
    </script>
```
#### (LONDON) code snippet for Emission graph module
```
  <div class="graph-emissions" id="graph-emissions-london">
        <div class="content">
            <div class="electricity">
                <div class="chart-container">
                    <div class="title">Electricity Demand</div>
                    <div class="chart">
                        <div class='tooltip'>description of electricity source or factoid to go here</div>
                        <div class="bar-sets">
                            <div class="vertical-legend">
                                <div class="legend-copy">percentage increase</div>
                                <div class="legend-val">
                                    <div class="legend-val-item">0</div>
                                    <div class="legend-val-item">20</div>
                                    <div class="legend-val-item">40</div>
                                    <div class="legend-val-item">60</div>
                                    <div class="legend-val-item">100</div>
                                </div>
                                <div class="line"></div>
                            </div>
                            <div class="bar-content">
                                <div id="bar-0" class="bar">
                                    <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                    <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                    <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                    <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                    <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                    <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                    <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                </div>
                                <div id="bar-1" class="bar">
                                    <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                    <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                    <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                    <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                    <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                    <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                    <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                </div>
                                <div id="bar-2" class="bar">
                                    <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                    <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                    <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                    <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                    <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                    <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                    <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="chart-legends">
                            <div class="devider-line"></div>
                            <div class="years">
                                <div class="year" id="year-0">2018</div>
                                <div class="year" id="year-1">2035</div>
                                <div class="year" id="year-2">2050</div>
                            </div>
                        </div>
                    </div>
                    <div id='legends-electric' class="legends">
                        <div id="box-0" class="each-legend mainColor box-oil">Oil</div>
                        <div id="box-1" class="each-legend mainColor box-nuclear">Nuclear</div>
                        <div id="box-2" class="each-legend mainColor box-coal">Coal</div>
                        <div id="box-3" class="each-legend mainColor box-gas">Gas</div>
                        <div id="box-4" class="each-legend mainColor box-hydro">Hydro</div>
                        <div id="box-5" class="each-legend mainColor box-solar">Solar</div>
                        <div id="box-6" class="each-legend mainColor box-wind">Wind</div> 
                    </div>
                </div>
            </div>
            <div class="emmissions">
                <div class="chart-container">
                    <div class="title">Emissions Reduction</div>
                    <div class="chart">
                        <div class='tooltip'>description of electricity source or factoid to go here</div>
                        <div class="bar-sets">
                                <div class="vertical-legend">
                                    <div class="legend-copy">percentage decrease</div>
                                    <div class="legend-val">
                                        <div class="legend-val-item">0</div>
                                        <div class="legend-val-item">20</div>
                                        <div class="legend-val-item">40</div>
                                        <div class="legend-val-item">60</div>
                                        <div class="legend-val-item">100</div>
                                    </div>
                                    <div class="line"></div>
                                </div>
                            <div class="bar-content">
                                <div id="bar-0" class="bar">
                                        <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                    </div>
                                    <div id="bar-1" class="bar">
                                        <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                    </div>
                                    <div id="bar-2" class="bar">
                                        <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                    </div>
                            </div>
                        </div>
                        <div class="chart-legends">
                            <div class="devider-line"></div>
                            <div class="years">
                                <div class="year" id="year-0">2018</div>
                                <div class="year" id="year-1">2035</div>
                                <div class="year" id="year-2">2050</div>
                            </div>
                        </div>
                    </div>
                    <div id='legends-emmissions' class="legends">
                        <div id="box-0" class="each-legend box-pm">PM</div>
                        <div id="box-1" class="each-legend box-no">NO</div>
                        <div id="box-2" class="each-legend box-ghgas">GH Gas</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="caption">
            <div class="original-copy"><p>By 2050, London could be using nearly 13.5 million kilowatt-hours of electricity every day on electric buses, shared fleets, and private cars alone.</br>That’s nearly a 2,500 percent increase in current electricity demand from transportation, or roughly about the same amount of energy you’d need to run 19,000 refrigerators for a year.</p>
            </div>
            <div class="rollover-copy">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
        </div>
    </div>

    <script>
        initEmmissionsGraph ({
            container: "#graph-emissions-london",
            location: "london"
        });
    </script>
```
#### (MUMBAI) code snippet for Emission graph module
```
 <div class="graph-emissions" id="graph-emissions-mumbai">
            <div class="content">
                <div class="electricity">
                    <div class="chart-container">
                        <div class="title">Electricity Demand</div>
                        <div class="chart">
                            <div class='tooltip'>description of electricity source or factoid to go here</div>
                            <div class="bar-sets">
                                <div class="vertical-legend">
                                    <div class="legend-copy">percentage increase</div>
                                    <div class="legend-val">
                                        <div class="legend-val-item">0</div>
                                        <div class="legend-val-item">20</div>
                                        <div class="legend-val-item">40</div>
                                        <div class="legend-val-item">60</div>
                                        <div class="legend-val-item">100</div>
                                    </div>
                                    <div class="line"></div>
                                </div>
                                <div class="bar-content">
                                    <div id="bar-0" class="bar">
                                        <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                        <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                        <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                        <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                        <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                    </div>
                                    <div id="bar-1" class="bar">
                                        <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                        <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                        <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                        <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                        <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                    </div>
                                    <div id="bar-2" class="bar">
                                        <div class="small-bar bar-oil" id="bar-gas-0"><span></span></div>
                                        <div class="small-bar bar-nuclear" id="bar-gas-1"><span></span></div>
                                        <div class="small-bar bar-coal" id="bar-gas-2"><span></span></div>
                                        <div class="small-bar bar-gas" id="bar-gas-3"><span></span></div>
                                        <div class="small-bar bar-hydro" id="bar-gas-4"><span></span></div>
                                        <div class="small-bar bar-solar" id="bar-gas-5"><span></span></div>
                                        <div class="small-bar bar-wind" id="bar-gas-6"><span></span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="chart-legends">
                                <div class="devider-line"></div>
                                <div class="years">
                                    <div class="year" id="year-0">2018</div>
                                    <div class="year" id="year-1">2035</div>
                                    <div class="year" id="year-2">2050</div>
                                </div>
                            </div>
                        </div>
                        <div id='legends-electric' class="legends">
                            <div id="box-0" class="each-legend mainColor box-oil">Oil</div>
                            <div id="box-1" class="each-legend mainColor box-nuclear">Nuclear</div>
                            <div id="box-2" class="each-legend mainColor box-coal">Coal</div>
                            <div id="box-3" class="each-legend mainColor box-gas">Gas</div>
                            <div id="box-4" class="each-legend mainColor box-hydro">Hydro</div>
                            <div id="box-5" class="each-legend mainColor box-solar">Solar</div>
                            <div id="box-6" class="each-legend mainColor box-wind">Wind</div>
                        </div>
                    </div>
                </div>
                <div class="emmissions">
                    <div class="chart-container">
                        <div class="title">Emissions Reduction</div>
                        <div class="chart">
                            <div class='tooltip'>description of electricity source or factoid to go here</div>
                            <div class="bar-sets">
                                    <div class="vertical-legend">
                                        <div class="legend-copy">percentage decrease</div>
                                        <div class="legend-val">
                                            <div class="legend-val-item">0</div>
                                            <div class="legend-val-item">20</div>
                                            <div class="legend-val-item">40</div>
                                            <div class="legend-val-item">60</div>
                                            <div class="legend-val-item">100</div>
                                        </div>
                                        <div class="line"></div>
                                    </div>
                                <div class="bar-content">
                                    <div id="bar-0" class="bar">
                                            <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                            <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                            <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                        </div>
                                        <div id="bar-1" class="bar">
                                            <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                            <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                            <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                        </div>
                                        <div id="bar-2" class="bar">
                                            <div class="small-bar bar-pm" id="bar-gas-0"><span></span></div>
                                            <div class="small-bar bar-no" id="bar-gas-1"><span></span></div>
                                            <div class="small-bar bar-ghgas" id="bar-gas-2"><span></span></div>
                                        </div>
                                </div>
                            </div>
                            <div class="chart-legends">
                                <div class="devider-line"></div>
                                <div class="years">
                                    <div class="year" id="year-0">2018</div>
                                    <div class="year" id="year-1">2035</div>
                                    <div class="year" id="year-2">2050</div>
                                </div>
                            </div>
                        </div>
                        <div id='legends-emmissions' class="legends">
                            <div id="box-0" class="each-legend box-pm">PM</div>
                            <div id="box-1" class="each-legend box-no">NO</div>
                            <div id="box-2" class="each-legend box-ghgas">GH Gas</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="caption">
                <div class="original-copy"><p>Siemens predicts that by 2050, eMobility could reduce traffic-related GHG emissions by 74 percent and decrease traffic-related air pollution by 62 percent.</br>
With an increase of nearly 19 million kilowatt-hours of electricity used per day, in a city like Mumbai you could binge watch 114 million hours of television with that much energy.</p></div>
                <div class="rollover-copy">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            </div>
        </div>

    <script>
        initEmmissionsGraph ({
            container: "#graph-emissions-mumbai",
            location: "mumbai"
        });
    </script>
```

### Electric Charges Graph

#### (LA) code snippet for Electric Charges graph module
```
    <div class="graph-vehicle-charges" id="graph-vehicle-charges-la">
        <div class="mapholder"><div class="dotContainer"></div></div>
        <div class="contents">
            <div class="content-copy"><p>In cities like LA, public charging infrastructure is going to be a priority. By 2050, shared fleets might be one of the more popular modes of transit, even above private cars, with 70 percent of passenger spots occupied by 2050.</p></div>
            <div class="deviderline"></div>
            <div class="legend">
                <div class="title">SCALE</div>
                <div class="val-container">
                    <div class="sample-dot"></div>
                    <div class="value">1 DOT = 100 CHARGERS</div>
                </div>
            </div>
        </div>
        
        <div class="sliderModule">
            <div class='years'>
                <div class="year">2018</div>
                <div class="year">2035</div>
                <div class="year">2050</div>
            </div>
            <div class="range-slider">
                
                <div class="sliderDotContainer">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <input id="r-slider" type="range" value="0" min="0" max="0">
            </div>
            <div class="hint">drag the slider to see the increasing number of electric vehicle chargers over time</div>
        </div>
    </div>

    <script>
        initVehicleCarges({
            container: "#graph-vehicle-charges-la",         // required
            location: "la",                                 // required
            intervals: 10,                                  // optional 
            start: 1,                                       // optional 
            end: 99                                         // optional 
        });
    </script>
```
#### (LONDON) code snippet for Electric Charges graph module
```
 <div class="graph-vehicle-charges" id="graph-vehicle-charges-london">
        <div class="mapholder"><div class="dotContainer"></div></div>
        <div class="contents">
            <div class="content-copy"><p>If London wants to meet its rigorous emissions targets by 2050, it will have to make buying electric more practical and help supply charging infrastructure for electric vehicles. </br>Siemens predicts the installation of nearly 840,000 new chargers for a city like London by 2050. To accommodate this, the city will have to invest in over 520 chargers a week, starting now.
                </p></div>
            <div class="deviderline"></div>
            <div class="legend">
                <div class="title">SCALE</div>
                <div class="val-container">
                    <div class="sample-dot"></div>
                    <div class="value">1 DOT = 100 CHARGERS</div>
                </div>
            </div>
        </div>
        
        <div class="sliderModule">
            <div class='years'>
                <div class="year">2018</div>
                <div class="year">2035</div>
                <div class="year">2050</div>
            </div>
            <div class="range-slider">
                
                <div class="sliderDotContainer">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <input id="r-slider" type="range" value="0" min="0" max="0">
            </div>
            <div class="hint">drag the slider to see the increasing number of electric vehicle chargers over time</div>
        </div>
    </div>

    <script>
        initVehicleCarges({
            container: "#graph-vehicle-charges-london",         // required
            location: "london",                                 // required
            intervals: 10,                                  // optional 
            start: 1,                                       // optional 
            end: 99                                         // optional 
        });
    </script>
```
#### (MUMBAI) code snippet for Electric Charges graph module
```
<div class="graph-vehicle-charges" id="graph-vehicle-charges-mumbai">
        <div class="mapholder"><div class="dotContainer"></div></div>
        <div class="contents">
            <div class="content-copy"><p>Siemens predicts that by 2050, a city like Mumbai would require nearly 500,000 electric vehicle chargers—that’s an average of about 300 chargers per week starting today.</p></div>
            <div class="deviderline"></div>
            <div class="legend">
                <div class="title">SCALE</div>
                <div class="val-container">
                    <div class="sample-dot"></div>
                    <div class="value">1 DOT = 100 CHARGERS</div>
                </div>
            </div>
        </div>
        
        <div class="sliderModule">
            <div class='years'>
                <div class="year">2018</div>
                <div class="year">2035</div>
                <div class="year">2050</div>
            </div>
            <div class="range-slider">
                <div class="sliderDotContainer">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <input id="r-slider" type="range" value="0" min="0" max="0">
            </div>
            <div class="hint">drag the slider to see the increasing number of electric vehicle chargers over time</div>
        </div>
        
       
    </div>

    <script>
        initVehicleCarges({
            container: "#graph-vehicle-charges-mumbai",         // required
            location: "mumbai",                                 // required
            intervals: 10,                                  // optional 
            start: 1,                                       // optional 
            end: 99                                         // optional 
        });
    </script>
```

#### Built With

* [CodeKit](https://codekitapp.com/) - as the build tool


#### Authors
* Project Manager: Elizabeth Line -- <liz.line@digitalcitizen.nyc>
* Developer: Tanvir Haider - <tanvir@willow.studio> 
* Designer: Alison DeBenedictis - <alison@alisondb.com> 

#### License

This is a commercial software and can not be used without agreement.
