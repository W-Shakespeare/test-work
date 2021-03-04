import React from "react";

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Catalog = () => {
  return (
    <div className="catalog">
      {items.map(() => {
        return (
          <div className="catalog-item">
            <img
              src="https://www.ivi.ru/titr/uploads/2016/04/25/3eb93716942fd1f45560c7972b0ae09f.jpg/1400x0"
              alt=""
            />
            <div className="catalog-item-text">
              Картина по номерам "Волк в облаках" 30х55 см
              <div className="catalog-item-text-svgStar">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6878 5.69565C16.4935 5.49042 16.228 5.35693 15.9387 5.31903L11.4206 4.73106L9.63274 0.710193C9.37167 0.12165 8.65311 -0.156266 8.02782 0.0894424C7.72972 0.206589 7.4927 0.429631 7.36827 0.710193L5.58037 4.73106L1.06232 5.31846C0.389189 5.40665 -0.0805444 5.99178 0.0131532 6.62532C0.0534211 6.89758 0.195248 7.14747 0.413307 7.33034L3.81733 10.1873L3.11791 14.6704C3.04214 15.1256 3.26429 15.5791 3.6813 15.8206C4.09245 16.068 4.6213 16.0588 5.02238 15.7971L8.50047 13.571L11.9786 15.7994C12.5398 16.1579 13.3036 16.0203 13.6845 15.4921C13.8576 15.2521 13.9285 14.9596 13.8831 14.6726L13.1837 10.1878L16.5877 7.33087C17.0951 6.90534 17.1399 6.17321 16.6878 5.69565ZM12.1309 9.54215C11.9787 9.67021 11.905 9.86172 11.9348 10.0518L12.6634 14.8515L8.84349 12.4071C8.63757 12.2754 8.36704 12.2754 8.16111 12.4071L4.31876 14.8367L5.0661 10.0496C5.09513 9.86021 5.02149 9.66974 4.86999 9.54219L1.22738 6.45209L6.08906 5.8207C6.30192 5.79308 6.48337 5.6616 6.56622 5.47502L8.50773 1.14275C8.50993 1.1453 8.51157 1.14821 8.5126 1.15132L10.4341 5.47274C10.5169 5.65932 10.6984 5.7908 10.9112 5.81842L15.779 6.47781L12.1309 9.54215Z"
                    fill="#818796"
                  />
                </svg>
              </div>
            </div>
            <div className="catalog-item-footer">
              <div className="catalog-item-footer-price">
                <div className="text">Цена за 1 шт</div>
                <div className="textPrice">55,1$</div>
              </div>
              <div className="catalog-item-footer-profitability">
                <div className="wrapperTextandSvg">
                  <div className="text">Рентабельность</div>
                  <div className="svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0C3.14027 0 0 3.14027 0 7C0 10.8597 3.14027 14 7 14C10.8597 14 14 10.8597 14 7C14 3.14027 10.8597 0 7 0ZM8.16668 11.375C8.16668 11.5362 8.03622 11.6667 7.875 11.6667H6.125C5.96378 11.6667 5.83332 11.5362 5.83332 11.375V7H5.54165C5.38043 7 5.24997 6.86954 5.24997 6.70832V5.54165C5.24997 5.38043 5.38043 5.24997 5.54165 5.24997H7.875C8.03622 5.24997 8.16668 5.38043 8.16668 5.54165V11.375ZM7 4.66668C6.35657 4.66668 5.83332 4.14345 5.83332 3.5C5.83332 2.85655 6.35657 2.33332 7 2.33332C7.64343 2.33332 8.16668 2.85655 8.16668 3.5C8.16668 4.14345 7.64343 4.66668 7 4.66668Z"
                        fill="#959CAE"
                      />
                    </svg>
                  </div>
                </div>

                <div className="textPercent">85.5%</div>
              </div>
              <div className="catalog-item-footer-amountOrder">
                <div className="wrapperTextandSvg">
                  <div className="text">Мин</div>
                  <div className="svg">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0C3.14027 0 0 3.14027 0 7C0 10.8597 3.14027 14 7 14C10.8597 14 14 10.8597 14 7C14 3.14027 10.8597 0 7 0ZM8.16668 11.375C8.16668 11.5362 8.03622 11.6667 7.875 11.6667H6.125C5.96378 11.6667 5.83332 11.5362 5.83332 11.375V7H5.54165C5.38043 7 5.24997 6.86954 5.24997 6.70832V5.54165C5.24997 5.38043 5.38043 5.24997 5.54165 5.24997H7.875C8.03622 5.24997 8.16668 5.38043 8.16668 5.54165V11.375ZM7 4.66668C6.35657 4.66668 5.83332 4.14345 5.83332 3.5C5.83332 2.85655 6.35657 2.33332 7 2.33332C7.64343 2.33332 8.16668 2.85655 8.16668 3.5C8.16668 4.14345 7.64343 4.66668 7 4.66668Z"
                        fill="#959CAE"
                      />
                    </svg>
                  </div>
                </div>

                <div className="btnAmountOrder">
                  <button>
                    x22
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.6872 3.42854C19.4189 3.09659 19.0202 2.90624 18.5933 2.90624H3.34908L3.21295 1.93062C3.11655 1.23976 2.5178 0.71875 1.82019 0.71875H0.624997C0.279842 0.71875 0 0.998592 0 1.34375C0 1.6889 0.279842 1.96874 0.624997 1.96874H1.82019C1.89769 1.96874 1.96425 2.02663 1.97491 2.10339L3.66197 14.1943C3.75838 14.8852 4.35712 15.4062 5.05474 15.4062H5.73243C5.66306 15.6018 5.62493 15.8121 5.62493 16.0312C5.62493 17.065 6.46606 17.9062 7.49992 17.9062C8.53378 17.9062 9.37491 17.065 9.37491 16.0312C9.37491 15.8121 9.33679 15.6018 9.26741 15.4062H12.6074C12.538 15.6018 12.4999 15.8121 12.4999 16.0312C12.4999 17.065 13.341 17.9062 14.3749 17.9062C15.4087 17.9062 16.2499 17.065 16.2499 16.0312C16.2499 15.8121 16.2117 15.6018 16.1424 15.4062H17.4999C17.8451 15.4062 18.1249 15.1263 18.1249 14.7812C18.1249 14.436 17.8451 14.1562 17.4999 14.1562H5.05478C4.97728 14.1562 4.91072 14.0983 4.90005 14.0215L4.74443 12.9062H17.053C17.7115 12.9062 18.2899 12.4388 18.4282 11.7945L19.9684 4.60721C20.0579 4.18998 19.9554 3.76037 19.6872 3.42854ZM8.12496 16.0312C8.12496 16.3758 7.84457 16.6562 7.49996 16.6562C7.15535 16.6562 6.87496 16.3758 6.87496 16.0312C6.87496 15.6866 7.15535 15.4062 7.49996 15.4062C7.84457 15.4062 8.12496 15.6865 8.12496 16.0312ZM14.9999 16.0312C14.9999 16.3758 14.7195 16.6562 14.3749 16.6562C14.0303 16.6562 13.7499 16.3758 13.7499 16.0312C13.7499 15.6866 14.0303 15.4062 14.3749 15.4062C14.7195 15.4062 14.9999 15.6865 14.9999 16.0312ZM18.7462 4.34518L17.206 11.5324C17.1906 11.6041 17.1263 11.6562 17.053 11.6562H4.56997L3.5235 4.15619H18.5933C18.6551 4.15619 18.6936 4.18775 18.715 4.21424C18.7364 4.24068 18.7591 4.28486 18.7462 4.34518Z"
                        fill="#4C7EFF"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Catalog;
