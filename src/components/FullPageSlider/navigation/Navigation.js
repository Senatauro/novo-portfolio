import "./Navigation.css"

export default function Navigation(props) {
    // Add style on the after css classfunction
    
    const style = {
        margin: ((props.currentSection - 1) * 26) + "px 0 0 0",
        height: "26px",
        borderRadius: "16px",
        backgroundColor: "white",
        transition: "margin-top 0.75s ease",
    }
    return (
        <>
            <div className="navigation-container">
                <div className="navigation-section">
                    <div className="navigation-item">
                        { "0" + props.currentSection }<br/>/<br/>05
                    </div>
                    <div className="navigation-bar">
                        <div style={style}></div>
                    </div>
                </div>
            </div>
        </>
    )
}