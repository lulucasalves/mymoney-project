import { Div, Title } from './styles'

let whiteColor = '#fff'
let logoColor = '#59E67F'

export function Logo(props) {
  return (
    <Div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.1422 5.85781C30.3647 2.08031 25.3422 0 20 0C14.6578 0 9.63531 2.08031 5.85781 5.85781C2.08031 9.63531 0 14.6578 0 20C0 25.3422 2.08039 30.3646 5.85781 34.1422C9.63523 37.9198 14.6578 40 20 40C25.3422 40 30.3647 37.9197 34.1422 34.1422C37.9197 30.3647 40 25.3422 40 20C40 14.6578 37.9196 9.63539 34.1422 5.85781Z"
          fill={logoColor}
        />
        <g clip-path="url(#clip0_35212_209)">
          <path
            d="M20.5714 8V33.1429"
            stroke={whiteColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.2857 12.5714H17.7143C16.6534 12.5714 15.636 12.9929 14.8859 13.743C14.1357 14.4931 13.7143 15.5106 13.7143 16.5714C13.7143 17.6323 14.1357 18.6497 14.8859 19.3999C15.636 20.15 16.6534 20.5714 17.7143 20.5714H23.4286C24.4894 20.5714 25.5069 20.9929 26.257 21.743C27.0072 22.4932 27.4286 23.5106 27.4286 24.5714C27.4286 25.6323 27.0072 26.6497 26.257 27.3999C25.5069 28.15 24.4894 28.5714 23.4286 28.5714H13.7143"
            stroke={whiteColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_35212_209">
            <rect
              width="27.4286"
              height="27.4286"
              fill={whiteColor}
              transform="translate(6.85715 6.85714)"
            />
          </clipPath>
        </defs>
      </svg>

      <Title>myMoney</Title>
    </Div>
  )
}