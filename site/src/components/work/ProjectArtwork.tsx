export function ProjectArtwork({ kind }: { kind: string }) {
  if (kind === "geospatial-pipelines")
    return (
      <svg
        viewBox="0 0 800 500"
        className="project-art"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="mapgrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M40 0H0v40"
              stroke="#8fbbad"
              strokeWidth=".5"
              opacity=".2"
            />
          </pattern>
        </defs>
        <rect width="800" height="500" fill="url(#mapgrid)" />
        <g transform="translate(90 10)">
          <g stroke="#a8cdb5" strokeWidth="1.1">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <path
                key={i}
                d={`M${90 + i * 13} 90C${280 + i * 5} ${-10 + i * 13},${180 + i * 10} ${250 + i * 5},${340 + i * 10} 220S${650 - i * 10} ${270 + i * 14},${490 + i * 7} 390`}
                opacity={0.25 + i * 0.07}
              />
            ))}
          </g>
          <g transform="translate(95 230)" stroke="#75b0a3">
            <path d="m0 0 155-80 155 80-155 80z" fill="#234e48" />
            <path d="m0 24 155 80 155-80m-310 48 155 80 155-80m-310 48 155 80 155-80" />
            <path d="m60 0 95-48 95 48-95 48z" stroke="#d8e9e6" />
          </g>
          <path d="M405 230h90v-70h100" stroke="#f69572" strokeWidth="2" />
          <circle cx="495" cy="230" r="5" fill="#f69572" />
          <rect x="550" y="100" width="120" height="60" fill="#d8e9e6" />
          <path d="m564 129 8 8 16-19" stroke="#142f30" strokeWidth="2" />
          <text x="598" y="134" fill="#142f30" fontSize="13">
            VALIDATED
          </text>
          <g fill="#c8ddd1" fontFamily="monospace" fontSize="11">
            <text x="75" y="425">
              SPATIAL ALIGNMENT / QA / PUBLISH
            </text>
            <text x="430" y="280">
              layer_042
            </text>
          </g>
        </g>
      </svg>
    );
  if (kind === "delivery-intelligence")
    return (
      <svg
        viewBox="0 0 800 500"
        className="project-art"
        fill="none"
        aria-hidden="true"
      >
        <g transform="translate(65 50)">
          <path d="M70 310H600M70 310V40" stroke="#9a9d91" strokeWidth="1" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M70 ${70 + i * 48}H600`}
              stroke="#ccd0c2"
              strokeWidth=".7"
            />
          ))}
          <g fill="#142f30">
            <rect x="110" y="155" width="48" height="155" />
            <rect x="206" y="215" width="48" height="95" />
            <rect x="302" y="248" width="48" height="62" />
            <rect x="398" y="123" width="48" height="187" />
            <rect x="494" y="186" width="48" height="124" />
          </g>
          <path
            d="M85 186H570"
            stroke="#bd4c2e"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <g fill="#485449" fontSize="12">
            <text x="110" y="338">
              P01
            </text>
            <text x="206" y="338">
              P02
            </text>
            <text x="302" y="338">
              P03
            </text>
            <text x="398" y="338">
              P04
            </text>
            <text x="494" y="338">
              P05
            </text>
            <text x="40" y="76">
              8
            </text>
            <text x="40" y="192">
              4
            </text>
            <text x="40" y="313">
              0
            </text>
            <text x="70" y="22">
              DEVELOPMENT DURATION / YEARS
            </text>
          </g>
          <rect x="405" y="26" width="245" height="70" fill="#f15a35" />
          <text x="425" y="54" fill="#11151b" fontSize="12">
            A SIGNAL TO INVESTIGATE
          </text>
          <text x="425" y="79" fill="#11151b" fontSize="18">
            Duration exceeds plan
          </text>
          <text x="70" y="393" fill="#566052" fontSize="11">
            Illustrative synthetic data · Not real project performance
          </text>
        </g>
      </svg>
    );
  return (
    <svg
      viewBox="0 0 800 500"
      className="project-art"
      fill="none"
      aria-hidden="true"
    >
      <g transform="translate(60 45)">
        <g stroke="#638982" strokeWidth="1">
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <rect
                x="0"
                y={35 + i * 66}
                width="185"
                height="42"
                fill="#d8e9e6"
              />
              <text
                x="15"
                y={61 + i * 66}
                fill="#142f30"
                fontSize="12"
                stroke="none"
              >
                S-00{i + 1} / qualification
              </text>
              <path
                d={`M185 ${56 + i * 66}H${250 + i * 15}V${i < 2 ? 115 : 285}H440`}
                opacity=".6"
              />
            </g>
          ))}
        </g>
        <rect x="440" y="65" width="230" height="100" fill="#142f30" />
        <path d="m463 99 9 9 20-22" stroke="#d8e9e6" strokeWidth="2" />
        <text x="463" y="139" fill="#d8e9e6" fontSize="19">
          Matched & validated
        </text>
        <rect x="440" y="235" width="230" height="100" fill="#f15a35" />
        <text x="463" y="271" fill="#11151b" fontSize="12">
          HUMAN REVIEW
        </text>
        <text x="463" y="308" fill="#11151b" fontSize="19">
          Exceptions stay visible
        </text>
        <text x="0" y="415" fill="#3e6861" fontSize="11">
          DETERMINISTIC MATCHING / NO SILENT ASSUMPTIONS
        </text>
      </g>
    </svg>
  );
}
