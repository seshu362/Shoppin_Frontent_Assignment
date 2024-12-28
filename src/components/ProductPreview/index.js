import React, {useState, useEffect, useRef} from 'react'
import './index.css'

const ProductPreview = props => {
  const {
    activeSeriesName,
    activeBandUrl,
    activePrice,
    activeSize,
    getCaseWatchesData,
    caseWatchData,
    activeWatchUrl,
    getUpdateWatchUrl,
    getUpdateBandUrl,
    activeCaseName,
    activeBand,
    getBandWatchesData,
    caseBandData,
  } = props

  const [activeDefaultPage, setActiveDefaultPage] = useState(true)
  const [activeBandPage, setActiveBandPage] = useState(false)
  const [activeCasePage, setActiveCasePage] = useState(false)
  const [isShowSize, setIsSizeShow] = useState(true)
  const caseRowRef = useRef(null) // Ref for the case row
  const [isFrontView, setIsFrontView] = useState(false)

  const onClickCase = () => {
    setActiveCasePage(true)
    setActiveDefaultPage(false)
    getCaseWatchesData(activeSeriesName)
    setIsSizeShow(true)
  }

  const onClickBand = () => {
    setActiveBandPage(true)
    setActiveDefaultPage(false)
    setActiveCasePage(false)
    getBandWatchesData(activeSeriesName)
    setIsSizeShow(true)
  }

  const getActiveWatchImage = watchUrl => {
    getUpdateWatchUrl(watchUrl) // Update the active watch URL
  }

  const getActiveBandImage = bandUrl => {
    getUpdateBandUrl(bandUrl)
  }

  useEffect(() => {
    if (activeCasePage && caseRowRef.current) {
      const activeIndex = caseWatchData.findIndex(
        item => item.watchUrl === activeWatchUrl,
      )

      if (activeIndex !== -1) {
        const scrollAmount =
          activeIndex * (250 + 20) - // Image width + gap
          caseRowRef.current.offsetWidth / 2 +
          125 // Half the image width

        caseRowRef.current.scrollLeft = scrollAmount
      }
    }
  }, [activeCasePage, caseWatchData, activeWatchUrl])

  const onClickSize = () => {
    setIsSizeShow(false)
  }

  const onClickFront = () => {
    setIsFrontView(!isFrontView)
  }

  const onClickSide = () => {
    setIsFrontView(!isFrontView)
  }

  return (
    <>
      {/* Default Page */}
      {activeDefaultPage && (
        <div className="product-container">
          <div className="watch-display">
            <img src={activeBandUrl} alt="Watch Band" className="watch-band" />
            <img src={activeWatchUrl} alt="Watch Case" className="watch-case" />
          </div>
          {isFrontView ? (
            <button
              type="button"
              className="side-view-button"
              onClick={onClickFront}
            >
              Front view
            </button>
          ) : (
            <button
              type="button"
              className="side-view-button"
              onClick={onClickSide}
            >
              Side view
            </button>
          )}

          <p className="collection-text">{activeSeriesName}</p>
          <p className="watch-details">
            {activeSize} {activeCaseName} with {activeBand}
          </p>
          <p className="watch-details-text">From {activePrice}</p>
          <div className="button-container">
            {isShowSize ? (
              <button className="button-size" onClick={onClickSize}>
                Size
              </button>
            ) : (
              <div className="size-button-container">
                <button className="numb-size-btn" type="button">
                  42mm
                </button>
                <button className="numb-size-btn" type="button">
                  46mm
                </button>
              </div>
            )}

            <button className="button-size" onClick={onClickCase}>
              Case
            </button>
            <button className="button-size" onClick={onClickBand}>
              Band
            </button>
          </div>
        </div>
      )}

      {/* Case Page */}
      {activeCasePage && (
        <div className="band-selection-page">
          <div className="case-container">
            <button
              className="scroll-button scroll-left"
              onClick={() => {
                caseRowRef.current.scrollLeft -= 200
              }}
            >
              &#8249; {/* Left Arrow */}
            </button>
            <div className="case-row" ref={caseRowRef}>
              {[
                ...new Map(
                  caseWatchData.map(item => [item.watchUrl, item]),
                ).values(),
              ].map(watch => (
                <button
                  key={watch.id}
                  className={`case-item ${
                    watch.watchUrl === activeWatchUrl ? 'active-case' : ''
                  }`}
                  onClick={() => getActiveWatchImage(watch.watchUrl)}
                  tabIndex="0"
                >
                  <img
                    src={activeBandUrl}
                    alt="watch band"
                    className={`case-band ${
                      watch.watchUrl === activeWatchUrl ? '' : 'hidden'
                    }`}
                  />
                  <img
                    src={watch.watchUrl}
                    alt="watch case"
                    className="case-image"
                  />
                </button>
              ))}
            </div>
            <button
              className="scroll-button scroll-right"
              onClick={() => {
                caseRowRef.current.scrollLeft += 200
              }}
            >
              &#8250; {/* Right Arrow */}
            </button>
          </div>
          <div className="details-section">
            <button type="button" className="side-view-button">
              Side view
            </button>
            <p className="collection-text">{activeSeriesName}</p>
            <p className="watch-details">
              {activeSize} {activeCaseName} with {activeBand}
            </p>
            <p className="watch-details-text">From {activePrice}</p>
          </div>
          <button
            type="button"
            className="back-button"
            onClick={() => {
              setActiveCasePage(false)
              setActiveDefaultPage(true)
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Band Page */}
      {activeBandPage && (
        <div className="band-selection-page">
          <div className="band-container">
            <button
              className="scroll-button scroll-left"
              onClick={() => {
                caseRowRef.current.scrollLeft -= 200
              }}
            >
              &#8249; {/* Left Arrow */}
            </button>
            <div className="band-row" ref={caseRowRef}>
              {[
                ...new Map(
                  caseBandData.map(item => [item.bandUrl, item]),
                ).values(),
              ].map(band => (
                <button
                  key={band.bandId}
                  className={`band-item ${
                    band.bandUrl === activeBandUrl ? 'selected-band' : ''
                  }`}
                  onClick={() => getActiveBandImage(band.bandUrl)}
                  tabIndex="0"
                >
                  {band.bandUrl === activeBandUrl && (
                    <img
                      src={activeWatchUrl}
                      alt="watch"
                      className="band-watch-image"
                    />
                  )}
                  <img
                    src={band.bandUrl}
                    alt="watch band"
                    className="band-image"
                  />
                </button>
              ))}
            </div>
            <button
              className="scroll-button scroll-right"
              onClick={() => {
                caseRowRef.current.scrollLeft += 200
              }}
            >
              &#8250; {/* Right Arrow */}
            </button>
          </div>
          <div className="details-section">
            <button type="button" className="side-view-button">
              Side view
            </button>
            <p className="collection-text">{activeSeriesName}</p>
            <p className="watch-details">
              {activeSize} {activeCaseName} with {activeBand}
            </p>
            <p className="watch-details-text">From {activePrice}</p>
          </div>
          <button
            type="button"
            className="back-button"
            onClick={() => {
              setActiveBandPage(false)
              setActiveDefaultPage(true)
            }}
          >
            Back
          </button>
        </div>
      )}
    </>
  )
}

export default ProductPreview
