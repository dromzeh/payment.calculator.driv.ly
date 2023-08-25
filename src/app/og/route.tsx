import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export const alt = 'driv.ly logo'

const metadata = {
    size: {
        width: 1200,
        height: 630
    }
}

export const contentType = 'image/png'

interface OptionalParams {
    VIN?: string
}

export async function GET(params: OptionalParams): Promise<ImageResponse> {
    params.VIN = '1G1YY26E385132782'

    if (params.VIN) {
        const { VIN } = params

        const vinData = await fetch(`https://specs.vin/${VIN}`).then((res) =>
            res.json()
        )
    }

    return new ImageResponse(
        (
            <div tw="p-10 justify-center items-center w-full h-full text-black relative flex">
                <svg
                    width="246"
                    height="127"
                    viewBox="0 0 246 127"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.8801 85.805C20.3692 85.805 16.4044 85.5024 11.9855 84.8971C9.56416 84.5944 7.89951 83.9588 6.99152 82.9903C6.08353 82.0218 5.69007 80.4479 5.81114 78.2687C6.23486 72.276 7.23365 64.891 8.8075 56.1138C10.3814 47.276 12.2881 38.7712 14.5278 30.5993C14.9516 29.0859 15.799 28.0266 17.0702 27.4213C18.3414 26.816 20.006 26.5133 22.0642 26.5133C25.7566 26.5133 27.6029 27.5424 27.6029 29.6005C27.6029 30.4479 27.4213 31.4165 27.0581 32.506C25.4842 37.3487 23.9104 43.8559 22.3365 52.0278C20.7627 60.1392 19.6428 67.8874 18.977 75.2724C20.793 75.454 22.8511 75.5448 25.1513 75.5448C35.7445 75.5448 43.644 72.3365 48.8499 65.9201C54.1162 59.5036 56.7494 50.9382 56.7494 40.224C56.7494 33.0206 54.6913 27.4516 50.575 23.5169C46.4588 19.5823 40.6477 17.615 33.1416 17.615C28.299 17.615 23.4867 18.3717 18.7046 19.885C13.983 21.3983 9.71549 23.3959 5.90193 25.8777C5.11501 26.4225 4.26755 26.6949 3.35956 26.6949C2.33051 26.6949 1.51332 26.2712 0.90799 25.4237C0.302663 24.5157 0 23.4261 0 22.155C0 20.7022 0.242131 19.5218 0.726392 18.6138C1.21065 17.6453 2.02784 16.7675 3.17796 15.9806C7.35472 13.1356 12.2579 10.9867 17.8874 9.5339C23.5169 8.02058 28.9346 7.26392 34.1404 7.26392C41.5254 7.26392 47.9116 8.56537 53.299 11.1683C58.6864 13.7106 62.8329 17.4637 65.7385 22.4274C68.644 27.391 70.0968 33.3838 70.0968 40.4056C70.0968 49.546 68.2808 57.5363 64.6489 64.3765C61.0169 71.1562 55.7203 76.4225 48.7591 80.1755C41.7978 83.9285 33.5048 85.805 23.8801 85.805Z"
                        fill="black"
                    />
                    <path
                        d="M81.7347 85.805C79.4345 85.805 77.8001 84.5944 76.8316 82.1731C75.9236 79.7518 75.4696 75.8777 75.4696 70.5508C75.4696 62.6816 76.5894 55.2058 78.8291 48.1235C79.3739 46.368 80.2516 45.0968 81.4623 44.3099C82.7335 43.4625 84.4889 43.0387 86.7286 43.0387C87.9393 43.0387 88.7868 43.1901 89.271 43.4927C89.7553 43.7954 89.9974 44.3704 89.9974 45.2179C89.9974 46.1864 89.5434 48.3656 88.6354 51.7554C88.0301 54.1767 87.5458 56.2954 87.1826 58.1114C86.8194 59.9273 86.5168 62.167 86.2746 64.8305C88.2722 59.6247 90.5119 55.3874 92.9938 52.1186C95.4756 48.8499 97.8969 46.5194 100.258 45.1271C102.679 43.7348 104.888 43.0387 106.886 43.0387C110.821 43.0387 112.788 45.006 112.788 48.9407C112.788 49.7276 112.516 51.6344 111.971 54.661C111.487 57.0823 111.244 58.5956 111.244 59.2009C111.244 61.3196 112.001 62.3789 113.514 62.3789C115.209 62.3789 117.388 61.0472 120.052 58.3838C120.839 57.5968 121.656 57.2034 122.503 57.2034C123.29 57.2034 123.896 57.5666 124.319 58.2929C124.804 58.9588 125.046 59.8668 125.046 61.0169C125.046 63.2566 124.44 65.0121 123.23 66.2833C121.535 68.0387 119.537 69.552 117.237 70.8232C114.997 72.0339 112.606 72.6392 110.064 72.6392C106.856 72.6392 104.404 71.822 102.709 70.1876C101.075 68.5532 100.258 66.3438 100.258 63.5593C100.258 62.6513 100.348 61.7433 100.53 60.8353C100.651 59.6247 100.712 58.8075 100.712 58.3838C100.712 57.4152 100.379 56.931 99.7129 56.931C98.8049 56.931 97.5943 57.96 96.0809 60.0181C94.6282 62.0157 93.1754 64.6792 91.7226 68.0084C90.2698 71.3377 89.0894 74.8486 88.1814 78.5411C87.5156 81.3862 86.7286 83.3232 85.8206 84.3523C84.9732 85.3208 83.6112 85.805 81.7347 85.805Z"
                        fill="black"
                    />
                    <path
                        d="M128.503 37.046C125.961 37.046 124.054 36.4709 122.783 35.3208C121.512 34.1102 120.876 32.4455 120.876 30.3269C120.876 28.2082 121.693 26.4528 123.328 25.0605C125.023 23.6077 127.111 22.8813 129.593 22.8813C131.833 22.8813 133.649 23.4261 135.041 24.5157C136.433 25.6053 137.129 27.1489 137.129 29.1465C137.129 31.5678 136.342 33.5048 134.768 34.9576C133.195 36.3499 131.106 37.046 128.503 37.046ZM127.777 85.805C123.842 85.805 120.967 84.4128 119.151 81.6283C117.396 78.8438 116.518 75.1513 116.518 70.5508C116.518 67.8269 116.851 64.3462 117.517 60.1089C118.243 55.8111 119.151 51.816 120.241 48.1235C120.785 46.1864 121.512 44.8547 122.42 44.1283C123.328 43.4019 124.781 43.0387 126.778 43.0387C129.865 43.0387 131.409 44.0678 131.409 46.1259C131.409 47.6392 130.834 51.1501 129.684 56.6586C128.231 63.3172 127.504 67.8268 127.504 70.1876C127.504 72.0036 127.747 73.3959 128.231 74.3644C128.715 75.3329 129.532 75.8172 130.682 75.8172C131.772 75.8172 133.134 75.0605 134.768 73.5472C136.403 72.0339 138.582 69.6428 141.306 66.3741C142.032 65.5266 142.85 65.1029 143.758 65.1029C144.544 65.1029 145.15 65.4661 145.573 66.1925C146.058 66.9189 146.3 67.9176 146.3 69.1888C146.3 71.6101 145.725 73.4866 144.575 74.8184C138.582 82.1428 132.983 85.805 127.777 85.805Z"
                        fill="black"
                    />
                    <path
                        d="M184.786 57.7482C184.967 57.6876 185.27 57.6574 185.694 57.6574C186.602 57.6574 187.298 57.96 187.782 58.5654C188.267 59.1707 188.509 59.9879 188.509 61.0169C188.509 62.8934 188.145 64.3765 187.419 65.4661C186.693 66.4951 185.603 67.2518 184.15 67.736C181.366 68.644 178.4 69.098 175.252 69.098C172.589 69.098 170.076 68.7348 167.716 68.0084C165.96 70.8535 164.023 73.7893 161.905 76.8159C159.483 80.2663 157.395 82.6271 155.639 83.8983C153.884 85.1695 151.886 85.805 149.647 85.805C147.165 85.805 145.198 84.8365 143.745 82.8995C142.352 80.9624 141.475 77.9055 141.112 73.7288C140.385 65.2542 140.022 57.839 140.022 51.483V48.3051C140.083 46.3075 140.627 44.9152 141.656 44.1283C142.685 43.3414 144.229 42.9479 146.287 42.9479C147.861 42.9479 149.011 43.3111 149.737 44.0375C150.524 44.7034 150.918 45.8535 150.918 47.4879C150.918 54.4491 151.342 63.4988 152.189 74.6368C155.821 69.2494 158.545 64.9515 160.361 61.7433C159.453 59.9879 158.999 57.8995 158.999 55.4782C158.999 53.4201 159.453 51.4225 160.361 49.4855C161.269 47.5484 162.51 45.9746 164.084 44.7639C165.658 43.5532 167.443 42.9479 169.441 42.9479C171.196 42.9479 172.619 43.5835 173.708 44.8547C174.798 46.0654 175.343 47.8511 175.343 50.2118C175.343 52.9358 174.616 56.0532 173.164 59.5641C175.464 59.4431 178.521 58.9891 182.334 58.2022L184.786 57.7482Z"
                        fill="black"
                    />
                    <path
                        d="M215.042 65.1029C215.829 65.1029 216.434 65.4661 216.858 66.1925C217.342 66.9189 217.584 67.9176 217.584 69.1888C217.584 71.6101 217.009 73.4866 215.859 74.8184C213.256 78.0266 210.411 80.6598 207.324 82.7179C204.297 84.776 200.847 85.805 196.973 85.805C191.646 85.805 187.681 83.3837 185.078 78.5411C182.536 73.6985 181.265 67.4334 181.265 59.7457C181.265 52.3608 182.203 43.9467 184.079 34.5036C186.016 25.0605 188.831 16.9491 192.524 10.1695C196.277 3.38983 200.726 0 205.871 0C208.777 0 211.047 1.36199 212.681 4.08596C214.376 6.74939 215.223 10.5932 215.223 15.6174C215.223 22.8208 213.226 31.1743 209.231 40.6779C205.236 50.1816 199.818 59.5944 192.978 68.9164C193.401 71.3983 194.098 73.184 195.066 74.2736C196.035 75.3026 197.306 75.8172 198.88 75.8172C201.361 75.8172 203.541 75.121 205.417 73.7288C207.294 72.276 209.685 69.8244 212.59 66.3741C213.317 65.5266 214.134 65.1029 215.042 65.1029ZM203.874 8.9891C202.481 8.9891 200.907 11.5012 199.152 16.5254C197.397 21.5496 195.853 27.7845 194.521 35.23C193.19 42.6755 192.463 49.8184 192.342 56.6586C196.64 49.5763 200.06 42.4939 202.602 35.4116C205.145 28.2688 206.416 21.7615 206.416 15.8898C206.416 11.2893 205.568 8.9891 203.874 8.9891Z"
                        fill="black"
                    />
                    <path
                        d="M242.025 43.0387C243.417 43.0387 244.385 43.2203 244.93 43.5835C245.475 43.9467 245.747 44.552 245.747 45.3995C245.747 46.8523 244.961 52.0278 243.387 60.9261C241.994 69.4612 241.177 74.5157 240.935 76.0896C238.695 91.6465 235.608 103.965 231.674 113.045C227.739 122.125 222.503 126.665 215.965 126.665C212.878 126.665 210.366 125.696 208.429 123.759C206.492 121.883 205.523 119.401 205.523 116.314C205.523 113.468 206.159 110.563 207.43 107.597C208.762 104.631 211.183 101.211 214.694 97.3365C218.266 93.523 223.29 89.1343 229.767 84.1707L230.039 82.0823C230.463 79.8426 230.947 76.6343 231.492 72.4576C230.281 76.8159 228.586 80.1452 226.407 82.4455C224.228 84.6852 221.928 85.805 219.507 85.805C216.783 85.805 214.543 84.5641 212.787 82.0823C211.093 79.5399 210.245 76.3922 210.245 72.6392C210.245 68.0992 210.548 63.9528 211.153 60.1997C211.758 56.3862 212.757 52.3608 214.149 48.1235C214.755 46.3075 215.602 45.006 216.692 44.2191C217.781 43.4322 219.507 43.0387 221.867 43.0387C223.199 43.0387 224.107 43.2506 224.591 43.6743C225.136 44.098 225.408 44.7336 225.408 45.5811C225.408 46.0654 225.076 47.6997 224.41 50.4842C223.804 52.7239 223.32 54.7518 222.957 56.5678C222.473 59.0496 222.049 61.4407 221.686 63.7409C221.323 65.9806 221.141 67.8268 221.141 69.2796C221.141 71.5799 221.777 72.73 223.048 72.73C223.956 72.73 225.076 71.822 226.407 70.006C227.8 68.19 229.252 65.4358 230.766 61.7433C232.339 58.0508 233.853 53.5109 235.306 48.1235C235.79 46.3075 236.516 45.006 237.485 44.2191C238.514 43.4322 240.027 43.0387 242.025 43.0387ZM216.964 117.857C218.477 117.857 220.172 116.102 222.049 112.591C223.925 109.08 225.802 103.238 227.678 95.0665C223.017 99.0012 219.628 102.573 217.509 105.781C215.451 109.05 214.422 111.895 214.422 114.316C214.422 115.345 214.603 116.192 214.967 116.858C215.39 117.524 216.056 117.857 216.964 117.857Z"
                        fill="black"
                    />
                </svg>
            </div>
        ),
        {
            ...metadata.size
        }
    )
}
