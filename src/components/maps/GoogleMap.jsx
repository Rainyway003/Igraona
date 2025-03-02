const GoogleMap = () => {
    return (
        <div style={{ position: "relative", textAlign: "right", width: "100%", height: "320px" }}>
            <div style={{ overflow: "hidden", background: "none", width: "100%", height: "320px" }}>
                <iframe
                    className="gmap_iframe"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=1536&height=320&hl=en&q=Gornji%20vakuf-uskoplje%20igraona%20igraona&t=h&z=19&ie=UTF8&iWloc=B&output=embed"
                    style={{ height: "320px" }}
                ></iframe>
                <a href="https://sprunkin.com/">Sprunki Game</a>
            </div>
        </div>
    );
};

export default GoogleMap;