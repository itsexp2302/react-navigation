import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();
    return(
        <>
        <h1>Event Details</h1>
        <p>Event Id is {params.eventID}</p>
        </>
    )
}

export default EventDetailPage;