function Card(props) {
    return (
        <div class="container">
            <div class="row row-cols-3 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card bg-primary text-white">
                        <div class="card-header">
                            <h5 class="card-title">Card 01</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-danger text-white">
                        <div class="card-header">
                            <h5 class="card-title">Card 02</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card bg-success text-white">
                        <div class="card-header">
                            <h5 class="card-title">Card 03</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;