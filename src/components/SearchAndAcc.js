import React from "react"
export default function SearchAndAcc (props){
 
   
      return (
        <div className='search_n_acc_wrapper'>
            <SearchField  setUpperInputValue={props.setTopInputValue} setSearchResults={props.setSearchResults} />
            {/* <AccWrapp/> */}
        </div>
      )
    }
  
  function SearchField (props){
    const[upperInputValue,setUpperInputValue] = React.useState('')
  const [goSearch,setGoSearch] = React.useState()
      return(
        <div className="search_wrapp">  
        <Input type="search" setInputValue={props.setUpperInputValue}  /> 
        <Button setSearchResults={props.setSearchResults}/>
        </div>)
      }
    
  function Input(props){
   
    const inputHandler =(e)=>{
    props.setInputValue(e.target.value)
  
    }
    return(
    <input
   
     className="searchInput"
    type='text'
    name="search"
    id="search"
    placeholder="to search some movies"
    onChange={inputHandler}
           /> )
  }
  
  
  function Button(props) {
  
  return ( 
    <button type="submit" className="toSearch" 
    onClick ={props.setSearchResults}>
 <>
 
  <svg className="search_icon"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="mdi-movie-search"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="#a5a4a4"
    
  >
    <path   d="M11.03 20H4C2.9 20 2 19.1 2 18L2 6C2 4.9 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V13.05C20.85 11.22 18.82 10 16.5 10C12.92 10 10 12.92 10 16.5C10 17.79 10.38 19 11.03 20M23.39 22L22 23.39L18.88 20.32C18.19 20.75 17.37 21 16.5 21C14 21 12 19 12 16.5S14 12 16.5 12 21 14 21 16.5C21 17.38 20.75 18.21 20.31 18.9L23.39 22M19 16.5C19 15.12 17.88 14 16.5 14S14 15.12 14 16.5 15.12 19 16.5 19 19 17.88 19 16.5Z" />
  </svg>
</>

   </button>)
    }
  
  function AccWrapp (){
        return(
          <div className="acc_wrapp">
      <svg
        version={1.0}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2600.000000 2600.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,2600.000000) scale(0.100000,-0.100000)"
          fill="var(--logo-color, #1356e4b0)"
          stroke="none"
        >
          <path
            d="M11345 23754 c-348 -56 -682 -208 -1030 -473 -138 -104 -441 -409
      -543 -546 -145 -193 -256 -447 -315 -715 -124 -559 -63 -1279 169 -2028 53
      -170 87 -247 184 -417 150 -262 162 -307 158 -588 -3 -194 -2 -204 21 -255 33
      -74 130 -161 234 -211 98 -47 176 -64 406 -91 280 -32 379 -64 446 -143 54
      -62 70 -128 69 -282 0 -196 -58 -501 -129 -677 l-26 -66 -142 -94 c-119 -79
      -152 -97 -207 -108 -104 -21 -307 -90 -565 -193 -407 -161 -491 -182 -869
      -223 -314 -33 -421 -52 -716 -125 -871 -216 -1370 -488 -1675 -914 -126 -177
      -262 -429 -393 -730 -88 -202 -345 -804 -450 -1056 -259 -619 -402 -849 -807
      -1299 -215 -239 -321 -367 -461 -555 -140 -189 -370 -479 -703 -885 -446 -543
      -809 -1034 -1011 -1370 -94 -156 -202 -383 -248 -522 -118 -355 -92 -637 78
      -849 109 -136 246 -230 595 -411 132 -69 310 -169 395 -222 85 -54 216 -128
      291 -165 201 -100 294 -127 674 -195 255 -46 426 -110 608 -229 99 -65 156
      -120 252 -246 163 -216 334 -333 596 -411 262 -78 595 -79 857 -4 22 6 22 6
      22 -119 0 -342 -58 -648 -226 -1189 -234 -754 -388 -1382 -499 -2033 -55 -322
      -97 -465 -245 -845 -147 -376 -188 -520 -197 -692 l-6 -118 5690 0 5691 0 -14
      78 c-112 613 -172 853 -359 1422 -68 206 -137 427 -154 490 -93 348 -144 866
      -99 1010 23 74 56 102 163 140 286 100 514 274 671 510 88 134 124 214 170
      373 43 150 62 182 126 215 99 51 227 41 538 -40 167 -43 322 -59 391 -40 l37
      10 11 -57 c6 -31 33 -189 61 -351 102 -592 188 -889 288 -993 71 -74 122 -90
      457 -141 942 -145 1494 -162 1995 -65 132 26 342 95 440 144 215 108 320 213
      374 373 34 98 45 181 51 383 3 96 11 212 16 259 22 191 92 317 222 401 129 84
      241 107 562 119 330 12 447 34 549 101 135 90 273 361 410 805 71 231 110 324
      181 427 31 45 85 124 120 175 166 241 163 400 -14 819 -113 267 -125 328 -141
      693 -11 253 -23 324 -91 515 -126 360 -250 586 -397 727 -94 90 -203 156 -402
      245 -327 147 -392 188 -573 362 -286 275 -317 292 -762 417 -246 70 -435 138
      -435 157 0 7 14 59 30 117 30 105 108 447 130 570 7 36 39 151 71 255 83 263
      109 374 109 468 0 88 -15 134 -54 165 -21 16 -215 88 -305 113 -20 6 -120
      -136 -176 -248 -68 -136 -124 -298 -215 -614 -87 -307 -128 -439 -140 -452 -4
      -4 -45 22 -91 59 -336 270 -652 591 -891 908 -144 191 -231 331 -451 726 -297
      534 -401 681 -834 1176 -254 290 -340 396 -483 589 -403 547 -872 952 -1343
      1162 -216 96 -370 142 -836 249 -403 92 -623 149 -798 205 -394 128 -660 275
      -863 478 -132 132 -177 198 -331 486 -293 548 -370 784 -341 1046 11 99 28
      172 118 519 40 151 54 271 54 451 0 258 14 304 148 481 44 59 91 131 105 160
      42 88 70 213 70 313 0 151 -30 228 -186 466 -87 133 -161 266 -202 364 -9 22
      -59 164 -110 315 -51 151 -111 317 -133 368 -93 215 -249 437 -522 742 -120
      134 -204 242 -318 411 -157 232 -287 339 -517 424 -245 91 -500 135 -815 140
      -118 2 -228 1 -245 -1z m2050 -1500 c91 -22 159 -59 209 -115 78 -87 91 -144
      132 -594 36 -403 -10 -628 -167 -799 -273 -297 -774 -337 -1037 -83 -62 59
      -106 128 -201 312 -94 180 -126 231 -185 287 -73 72 -172 104 -273 90 -44 -7
      -49 -10 -60 -42 -17 -49 -15 -183 3 -260 8 -36 35 -126 59 -200 54 -166 69
      -252 62 -344 -10 -138 -86 -275 -225 -408 -196 -187 -455 -311 -647 -310 -148
      0 -211 38 -399 237 -162 171 -220 207 -328 208 -137 1 -199 -67 -293 -322 -43
      -115 -74 -161 -111 -161 -19 0 -148 44 -163 56 -2 2 14 25 36 51 65 78 102
      138 153 246 92 192 143 387 160 607 22 284 73 411 203 507 110 80 191 112 612
      237 368 109 463 122 662 87 146 -25 192 -26 259 -3 99 34 166 85 349 263 99
      96 205 195 235 218 142 111 468 229 695 250 95 9 178 4 260 -15z m-298 -2770
      c102 -15 196 -15 236 1 15 6 17 -1 17 -83 0 -255 -170 -493 -453 -632 -120
      -59 -191 -79 -307 -87 -150 -10 -259 20 -400 109 -30 19 -109 63 -174 99 -113
      60 -118 64 -85 67 48 5 75 34 124 137 47 100 66 121 143 160 49 25 61 26 185
      26 185 -1 222 11 308 100 92 96 135 119 226 119 40 0 121 -7 180 -16z m-1347
      -4507 c47 -14 137 -46 200 -71 l115 -45 33 21 c18 11 34 19 36 17 46 -63 119
      -206 135 -266 8 -30 17 -43 30 -43 9 0 94 12 187 26 244 37 469 42 689 16 187
      -23 321 -34 705 -57 464 -29 603 -52 765 -129 111 -53 174 -100 340 -252 247
      -226 294 -259 470 -334 62 -26 128 -58 145 -70 68 -48 117 -150 139 -287 l8
      -51 -46 -12 c-60 -15 -199 -83 -231 -113 -23 -22 -60 -203 -595 -2934 l-569
      -2910 -71 -46 c-239 -156 -581 -298 -918 -382 -1126 -278 -2459 -113 -3897
      483 -149 62 -299 128 -301 134 -1 2 -36 1419 -79 3150 l-78 3148 -81 97 -81
      97 0 97 0 96 58 13 c53 12 182 55 484 164 143 51 298 86 383 86 55 0 57 1 50
      23 -4 12 -9 51 -12 87 -5 79 14 115 80 155 98 57 308 70 694 45 170 -11 174
      -11 455 24 432 55 435 55 558 51 86 -2 136 -9 200 -28z m6830 -365 c113 -46
      144 -62 142 -75 -2 -10 -234 -623 -517 -1364 -283 -741 -515 -1349 -515 -1353
      0 -3 237 -25 528 -48 290 -24 537 -45 550 -48 l22 -4 0 -228 0 -228 -152 -30
      -152 -29 -332 -1875 c-183 -1031 -335 -1889 -339 -1906 -5 -29 -12 -34 -99
      -67 -205 -79 -449 -142 -671 -173 -162 -23 -489 -23 -640 0 -301 46 -575 142
      -787 278 l-78 50 -2 2031 -3 2032 -122 14 -123 14 0 200 0 199 93 -6 c209 -14
      1889 -87 1900 -83 7 3 266 624 577 1381 311 757 567 1376 570 1376 3 0 71 -26
      150 -58z m3294 -2006 l54 -24 -240 -748 c-131 -412 -290 -909 -352 -1104
      l-114 -355 77 -8 c408 -40 687 -110 834 -211 55 -38 69 -55 128 -158 l67 -117
      -114 -27 c-63 -16 -119 -31 -124 -34 -5 -3 -83 -584 -174 -1290 -92 -707 -168
      -1295 -171 -1307 -4 -17 -39 -39 -148 -92 -686 -334 -1380 -370 -1922 -99
      -230 116 -426 270 -606 478 l-56 65 -42 1040 c-23 572 -44 1085 -48 1140 l-6
      100 -89 75 c-134 113 -123 84 -108 270 7 88 18 164 24 169 23 18 460 79 776
      108 235 21 873 25 1060 5 126 -13 307 -38 346 -47 20 -4 49 69 435 1100 398
      1062 415 1105 437 1100 12 -3 47 -16 76 -29z"
          />
        </g>
      </svg>
    </div>
    
        )
      }