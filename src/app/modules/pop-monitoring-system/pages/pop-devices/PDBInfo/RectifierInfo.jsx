import LineChart from '../../../components/charts/rectifier-info-charts/LineChart'

const RectifierInfo = () => {
  return (
    <main>
      <div>
        <div class='row'>
          <div class='col-sm-3'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Special title treatment</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class='col-sm-9'>
            <div class='card'>
              <div class='card-body'>
                <h5 class='card-title'>Special title treatment</h5>
                <p class='card-text'>
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <a href='#' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <LineChart />
      </div>
    </main>
  )
}

export default RectifierInfo
