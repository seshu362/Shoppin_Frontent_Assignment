import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './index.css'
import ProductPreview from '../ProductPreview'

const Preview = () => {
  const [activeCollection, setActiveCollection] = useState(
    'Apple Watch Series 10',
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeCollectionData, setActiveCollectionData] = useState(null)

  // States for watch and band details
  const [activeSeriesName, setActiveSeriesName] = useState('')
  const [activeBand, setActiveBand] = useState('')
  const [activeBandUrl, setActiveBandUrl] = useState('')
  const [activeCaseName, setActiveCaseName] = useState('')
  const [activeWatchUrl, setActiveWatchUrl] = useState('')
  const [activePrice, setActivePrice] = useState('')
  const [activeSize, setActiveSize] = useState('')
  const [caseWatchData, setCaseWatchData] = useState([])
  const [caseBandData, setBandWatchData] = useState([])

  const collections = [
    'Apple Watch Series 10',
    'Apple Watch Hermès Series 10',
    'Apple Watch SE',
  ]
  const watchesData = [
    {
      series: 'Apple Watch Series 10',
      band: [
        {
          bandId: 1,
          bandName: 'Solo Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735356387/MYA33ref_SR_S10_VW_PF_a6yqiq.jpg',
        },
        {
          bandId: 2,
          bandName: 'Sport Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MXL73_SR_S10_VW_PF_gzw1x2.jpg',
        },
        {
          bandId: 3,
          bandName: 'Sport Band',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301700/MXLQ3ref_SR_S10_VW_PF_hstaly.jpg',
        },
        {
          bandId: 4,
          bandName: 'FineWoven',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MXWY3ref_SR_S10_VW_PF_q1vbvg.jpg',
        },
        {
          bandId: 5,
          bandName: 'Braided Solo Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MY373ref_SR_S10_VW_PF_bndhmp.jpg',
        },
        {
          bandId: 6,
          bandName: 'Natural Milanese Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MC7J4ref_SR_S10_VW_PF_y60det.jpg',
        },
        {
          bandId: 7,
          bandName: 'Nike Sport Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301702/MYJD3_SR_S10_VW_PF_u0xl68.jpg',
        },
        {
          bandId: 8,
          bandName: 'Nike Sport Band',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MXU73ref_SR_S10_VW_PF_yaliew.jpg',
        },
      ],
      models: [
        {
          id: 1,
          size: '42mm',
          case: 'Jet Black Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297884/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_i4ezrb.png',
          price: '$399',
        },
        {
          id: 2,
          size: '46mm',
          case: 'Silver Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297884/watch-case-46-aluminum-silver-nc-s10_VW_PF_watch-face-46-aluminum-silver-s10_VW_PF_adjk8r.png',
          price: '$429',
        },
        {
          id: 3,
          size: '42mm',
          case: 'Gold Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297890/watch-case-46-aluminum-rosegold-nc-s10_VW_PF_watch-face-46-aluminum-rosegold-s10_VW_PF_hqnlfn.png',
          price: '$399',
        },
        {
          id: 4,
          size: '46mm',
          case: 'Gold Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297890/watch-case-46-aluminum-rosegold-nc-s10_VW_PF_watch-face-46-aluminum-rosegold-s10_VW_PF_hqnlfn.png',
          price: '$429',
        },
        {
          id: 5,
          size: '42mm',
          case: 'Silver Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297884/watch-case-46-aluminum-silver-nc-s10_VW_PF_watch-face-46-aluminum-silver-s10_VW_PF_adjk8r.png',
          price: '$399',
        },
        {
          id: 6,
          size: '46mm',
          case: 'Jet Black Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297884/watch-case-46-aluminum-jetblack-nc-s10_VW_PF_watch-face-46-aluminum-jetblack-s10_VW_PF_i4ezrb.png',
          price: '$429',
        },
        {
          id: 7,
          size: '42mm',
          case: 'Natural Titanium Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297886/watch-case-46-titanium-slate-cell-s10_VW_PF_watch-face-46-titanium-slate-s10_VW_PF_qajeoz.png',
          price: '$699',
        },
        {
          id: 8,
          size: '46mm',
          case: 'Natural Titanium Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297886/watch-case-46-titanium-slate-cell-s10_VW_PF_watch-face-46-titanium-slate-s10_VW_PF_qajeoz.png',
          price: '$749',
        },
        {
          id: 9,
          size: '42mm',
          case: 'Gold Titanium Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297885/watch-case-46-titanium-gold-cell-s10_VW_PF_watch-face-46-titanium-gold-s10_VW_PF_x2gskv.png',
          price: '$699',
        },
        {
          id: 10,
          size: '46mm',
          case: 'Gold Titanium Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297885/watch-case-46-titanium-gold-cell-s10_VW_PF_watch-face-46-titanium-gold-s10_VW_PF_x2gskv.png',
          price: '$749',
        },
        {
          id: 11,
          size: '42mm',
          case: 'Slate Titanium Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297893/watch-case-46-titanium-natural-cell-s10_VW_PF_watch-face-46-titanium-natural-s10_VW_PF_za3uvl.png',
          price: '$699',
        },
        {
          id: 12,
          size: '42mm',
          case: 'Slate Titanium Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735297893/watch-case-46-titanium-natural-cell-s10_VW_PF_watch-face-46-titanium-natural-s10_VW_PF_za3uvl.png',
          price: '$749',
        },
      ],
    },
    {
      series: 'Apple Watch Hermès Series 10',
      band: [
        {
          bandId: 1,
          bandName: 'Hermès Toile H',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735303204/MXJD3_VW_PF_a3ndeb.jpg',
        },
        {
          bandId: 2,
          bandName: 'Hermès Torsade',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735303205/MXK33_VW_PF_cfsdy1.jpg',
        },
        {
          bandId: 3,
          bandName: 'Hermès Kilim',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735303204/MXJL3_VW_PF_msumks.jpg',
        },
        {
          bandId: 4,
          bandName: 'Hermès Grand H',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735303204/MXJW3ref_VW_PF_nmwo2v.jpg',
        },
      ],
      models: [
        {
          id: 1,
          size: '42mm',
          case: 'Silver Titanium Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735303543/watch-case-42-titanium-silver-cell-hermes10s_VW_PF_watch-face-42-radial-blanc-hermes10s_VW_PF_ycy2gh.png',
          price: '$1,899.00',
        },
        {
          id: 2,
          size: '46mm',
          case: 'Silver Titanium Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735303543/watch-case-42-titanium-silver-cell-hermes10s_VW_PF_watch-face-42-radial-blanc-hermes10s_VW_PF_ycy2gh.png',
          price: '$1,949.00',
        },
      ],
    },
    {
      series: 'Apple Watch SE',
      band: [
        {
          bandId: 1,
          bandName: 'Natural Milanese Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MC7J4ref_SR_S10_VW_PF_y60det.jpg',
        },
        {
          bandId: 2,
          bandName: 'Sport Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MXL73_SR_S10_VW_PF_gzw1x2.jpg',
        },
        {
          bandId: 3,
          bandName: 'Sport Band',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301700/MXLQ3ref_SR_S10_VW_PF_hstaly.jpg',
        },
        {
          bandId: 4,
          bandName: 'FineWoven',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MXWY3ref_SR_S10_VW_PF_q1vbvg.jpg',
        },
        {
          bandId: 5,
          bandName: 'Braided Solo Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MY373ref_SR_S10_VW_PF_bndhmp.jpg',
        },
        {
          bandId: 6,
          bandName: 'Solo Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MY803ref_SR_S10_VW_PF_x69e5m.jpg',
        },
        {
          bandId: 7,
          bandName: 'Nike Sport Loop',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301702/MYJD3_SR_S10_VW_PF_u0xl68.jpg',
        },
        {
          bandId: 8,
          bandName: 'Nike Sport Band',
          bandUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735301701/MXU73ref_SR_S10_VW_PF_yaliew.jpg',
        },
      ],

      models: [
        {
          id: 1,
          size: '40mm',
          case: 'Midnight Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735304189/watch-case-44-aluminum-midnight-nc-se_VW_PF_watch-face-44-aluminum-midnight-se_VW_PF_mxxaq4.png',
          price: '$249',
        },
        {
          id: 2,
          size: '44mm',
          case: 'Midnight Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735303543/watch-case-42-titanium-silver-cell-hermes10s_VW_PF_watch-face-42-radial-blanc-hermes10s_VW_PF_ycy2gh.png',
          price: '$279',
        },
        {
          id: 3,
          size: '40mm',
          case: 'Starlight Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735304189/watch-case-44-aluminum-starlight-nc-se_VW_PF_watch-face-44-aluminum-starlight-se_VW_PF_reoxoy.png',
          price: '$249',
        },
        {
          id: 4,
          size: '44mm',
          case: 'Starlight Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735304189/watch-case-44-aluminum-starlight-nc-se_VW_PF_watch-face-44-aluminum-starlight-se_VW_PF_reoxoy.png',
          price: '$279',
        },
        {
          id: 5,
          size: '40mm',
          case: 'Silver Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735304189/watch-case-44-aluminum-silver-nc-se_VW_PF_watch-face-44-aluminum-silver-se_VW_PF_cnoj2g.png',
          price: '$249',
        },
        {
          id: 6,
          size: '44mm',
          case: 'Silver Aluminum Case',
          watchUrl:
            'https://res.cloudinary.com/dw7dhefpb/image/upload/v1735304189/watch-case-44-aluminum-silver-nc-se_VW_PF_watch-face-44-aluminum-silver-se_VW_PF_cnoj2g.png',
          price: '$279',
        },
      ],
    },
  ]

  const getCaseWatchesData = seriesName => {
    const matchingSeries = watchesData.find(
      watch => watch.series === seriesName,
    )
    setCaseWatchData(matchingSeries?.models || [])
  }

  useEffect(() => {
    const matchingCollection = watchesData.find(
      watch => watch.series === activeCollection,
    )

    setActiveCollectionData(matchingCollection)

    if (matchingCollection) {
      const defaultBand = matchingCollection.band?.[0] || {}
      const defaultModel = matchingCollection.models?.[0] || {}

      setActiveSeriesName(matchingCollection.series)
      setActiveBand(defaultBand.bandName || '')
      setActiveBandUrl(defaultBand.bandUrl || '')
      setActiveCaseName(defaultModel.case || '')
      setActiveWatchUrl(defaultModel.watchUrl || '')
      setActivePrice(defaultModel.price || '')
      setActiveSize(defaultModel.size || '')
    } else {
      // Reset states
      setActiveSeriesName('')
      setActiveBand('')
      setActiveBandUrl('')
      setActiveCaseName('')
      setActiveWatchUrl('')
      setActivePrice('')
      setActiveSize('')
    }

    getCaseWatchesData(activeCollection)
  }, [activeCollection])

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleOptionClick = collection => {
    setActiveCollection(collection)
    setIsDropdownOpen(false)
  }

  const getBandWatchesData = seriesName => {
    const matchingBandSeries = watchesData.find(
      watch => watch.series === seriesName,
    )
    setBandWatchData(matchingBandSeries?.band || [])
  }

  const getUpdateWatchUrl = url => {
    const updateData = watchesData.find(watch =>
      watch.models.some(model => model.watchUrl === url),
    )
    const defaultModel = updateData?.models.find(
      model => model.watchUrl === url,
    )

    if (defaultModel) {
      setActiveCaseName(defaultModel.case || '')
      setActiveWatchUrl(defaultModel.watchUrl || '')
      setActivePrice(defaultModel.price || '')
      setActiveSize(defaultModel.size || '')
    } else {
      setActiveCaseName('')
      setActiveWatchUrl('')
      setActivePrice('')
      setActiveSize('')
    }
  }

  const getUpdateBandUrl = url => {
    const updateData = watchesData.find(watch =>
      watch.band.some(band => band.bandUrl === url),
    )
    const defaultBand = updateData?.band.find(band => band.bandUrl === url)

    if (defaultBand) {
      setActiveBand(defaultBand.bandName || '')
      setActiveBandUrl(defaultBand.bandUrl || '')
    } else {
      setActiveBand('')
      setActiveBandUrl('')
    }
  }

  return (
    <div className="preview-header-container">
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="button-mobile-container">
          <Link to="/">
            <button type="button" className="preview-mobile-logo-button">
              <img
                src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1735278985/apple-watch-design-studio-logo_1_tkpgp5.jpg"
                alt="logo"
                className="logo-img"
              />
            </button>
          </Link>
        </div>
        <div className="mobile-second-header-container">
          <div className="dropdown">
            <button
              type="button"
              className="dropdown-button"
              onClick={handleDropdownClick}
              aria-expanded={isDropdownOpen}
            >
              Collections
              <svg
                className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M7 10l5 5 5-5z" fill="currentColor" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu" role="menu">
                {collections.map((collection, index) => (
                  <React.Fragment key={collection}>
                    <button
                      type="button"
                      className={`dropdown-option ${
                        collection === activeCollection ? 'active' : ''
                      }`}
                      onClick={() => handleOptionClick(collection)}
                    >
                      {collection}
                    </button>
                    {index < collections.length - 1 && (
                      <div className="dropdown-divider" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
          <button className="mobile-save-button" type="button">
            Save
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="desktop-header">
        <Link to="/">
          <button type="button" className="preview-mobile-logo-button">
            <img
              src="https://res.cloudinary.com/dw7dhefpb/image/upload/v1735278985/apple-watch-design-studio-logo_1_tkpgp5.jpg"
              alt="logo"
              className="logo-img"
            />
          </button>
        </Link>
        <div className="dropdown">
          <button
            type="button"
            className="dropdown-button"
            onClick={handleDropdownClick}
            aria-expanded={isDropdownOpen}
          >
            Collections
            <svg
              className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
            >
              <path d="M7 10l5 5 5-5z" fill="currentColor" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu" role="menu">
              {collections.map((collection, index) => (
                <React.Fragment key={collection}>
                  <button
                    type="button"
                    className={`dropdown-option ${
                      collection === activeCollection ? 'active' : ''
                    }`}
                    onClick={() => handleOptionClick(collection)}
                  >
                    {collection}
                  </button>
                  {index < collections.length - 1 && (
                    <div className="dropdown-divider" />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
        <button className="mobile-save-button" type="button">
          Save
        </button>
      </div>

      {/* ProductPreview Component */}
      <ProductPreview
        activeSeriesName={activeSeriesName}
        activeCaseName={activeCaseName}
        activeBandUrl={activeBandUrl}
        activeBand={activeBand}
        activeWatchUrl={activeWatchUrl}
        activePrice={activePrice}
        activeSize={activeSize}
        getCaseWatchesData={getCaseWatchesData}
        getBandWatchesData={getBandWatchesData}
        caseWatchData={caseWatchData}
        caseBandData={caseBandData}
        getUpdateWatchUrl={getUpdateWatchUrl}
        getUpdateBandUrl={getUpdateBandUrl}
      />
    </div>
  )
}

export default Preview
