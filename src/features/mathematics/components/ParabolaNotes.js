import DrawParabola from "./DrawParabola";

export default function ParabolaNotes()
{
    return(
        <div className="bg-white p-1 m-1 text-center">
            <h1 className="p-2 bg-theme text-white">Parabola function</h1>
            <div className="row">
                <section className="col-12">
                    <h2>f(x) = ax<sup>2</sup> + q</h2>      
                    <div className="m-1 p-1 border">
                        <p>
                            When a &gt; 0, the graph is <b>concave</b><br/>
                        </p>
                        <svg width="18.066mm" height="15.586mm" version="1.1" viewBox="0 0 18.066 15.586">
                            <g transform="translate(-110.21 -74.886)" fill="none">
                                <path d="m118.46 74.965-0.0989 14.459v-0.11868" fill="#000" stroke="#0d0000" strokeWidth=".2"/>
                                <path d="m110.19 81.908 18.019 0.0989" fill="#000" stroke="#0d0000" strokeWidth=".2"/>
                                <path d="m122.71 75.019c-2.8471 9.0647-5.668 9.0578-8.4631-0.02086" stroke="#cb0000" strokeWidth=".23491" title="0.25*x*x"/>
                            </g>
                        </svg>
                        <p>
                            The graph has a <b>minimum</b> at the turning point.
                        </p>
                    </div>

                    <div className="m-1 p-1 border">
                        <p>When a &lt; 0, the graph is <b>convex</b></p>
                            <svg width="18.389mm" height="15.085mm" viewBox="0 0 18.389 15.085">
                                <g transform="translate(-73.12 -129.83)" fill="none">
                                    <path d="m73.216 136.3 18.32 0.0957" fill="#000" stroke="#050000" strokeWidth=".2"/>
                                    <path d="m81.677 129.85 0.15302 15.123v0.0199" fill="#000" stroke="#040000" strokeWidth=".20382"/>
                                    <path d="m86.934 144.58c-3.4918-10.856-6.9838-10.856-10.475 0" stroke="#f30000" strokeWidth=".28589" title="0.25*x*x"/>
                                </g>
                            </svg>
                        <p>
                            The graph has a <b>maximum</b> at the turning point
                        </p>       
                    </div>  

                    <div className="m-1 p-1 border">
                        q is the turning point of the graph<br/><br/>
                        When q &gt; 0, the graph shift up q units
                        <div>
                            <svg width="21.41mm" height="29.005mm" version="1.1" viewBox="0 0 21.41 29.005" xmlns="http://www.w3.org/2000/svg">
                                <g transform="matrix(.14461 0 0 .17904 -6.5177 -9.4199)">
                                    <g transform="matrix(1 0 0 .90375 -5.9604e-6 5.0641)" fill="none">
                                        <path d="m117.41 52.612-0.0105 162" stroke="#070000" strokeWidth="2"/>
                                        <path d="m45.072 130.59 148.06 0.0104" stroke="#020000" strokeWidth="2"/>
                                        <path d="m161.45 53.212c-29.237 68.336-58.474 68.336-87.711 0" stroke="#f20000" strokeWidth="2.0756" title="0.25*x*x"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div> 

                    <div className="p-1 m-1 border">
                        When q &lt; 0 the graph shift down q units
                        <div>
                            <svg width="22.731mm" height="27.137mm" version="1.1" viewBox="0 0 22.731 27.137" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(-37.726 -44.258)" fill="none">
                                    <path d="m48.832 44.258-0.0017 27.137" stroke="#070000" strokeWidth=".32073"/>
                                    <path d="m37.726 57.32 22.731 2e-3" stroke="#020000" strokeWidth=".32073"/>
                                    <path d="m54.444 54.887c-3.7224 12.817-7.4448 12.817-11.167 0" stroke="#f20000" strokeWidth=".32073" title="0.25*x*x"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </section>
                <section className="col-12">
                    <div className="p-1 m-1 border">
                        <h2 className="text-center">Simulation</h2>
                        <DrawParabola/>
                    </div>
                </section>
            </div>
        </div>
    );
}