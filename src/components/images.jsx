export default function Images({photos}) {
    console.log(photos);
    return (
        <div>
            {photos.map(photo => (
                <>
                <img key={photo} src={photo} />
                <br /> <br />
                </>
            ))}
            
        </div>
    )
}