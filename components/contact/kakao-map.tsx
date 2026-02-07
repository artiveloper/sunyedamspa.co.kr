"use client"

export default function KakaoMapStatic() {
    return (
        <div className="w-full text-[12px] text-stone-700 relative">

            {/* 지도 이미지 영역 */}
            <div className="w-full aspect-[16/9] border border-stone-300 overflow-hidden">
                <a
                    href="https://map.kakao.com/?urlX=502290.9999999989&urlY=1111174.0000000014&itemId=1506964495&q=선예담스파&srcid=1506964495&map_type=TYPE_MAP&from=roughmap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                >
                    <img
                        src="https://t1.daumcdn.net/roughmap/imgmap/8ee31ac0eb9a314f5bff204fb1dfa8f9cc56b344ce83b55dd46076b68d131029"
                        alt="선예담스파 지도"
                        className="w-full h-full object-cover"
                    />
                </a>
            </div>

            {/* 하단 바 */}
            <div className="flex items-center justify-between px-3 py-2 border border-t-0 border-stone-200 bg-stone-50 text-[11px]">

                {/* 카카오맵 로고 */}
                <a
                    href="https://map.kakao.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"
                        alt="카카오맵"
                        className="w-[72px] h-[16px]"
                    />
                </a>

                {/* 액션 링크 */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://map.kakao.com/?from=roughmap&srcid=1506964495&confirmid=1506964495&q=선예담스파&rv=on"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        로드뷰
                    </a>

                    <span className="w-px h-3 bg-stone-300" />

                    <a
                        href="https://map.kakao.com/?from=roughmap&eName=선예담스파&eX=502290.9999999989&eY=1111174.0000000014"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        길찾기
                    </a>

                    <span className="w-px h-3 bg-stone-300" />

                    <a
                        href="https://map.kakao.com?map_type=TYPE_MAP&from=roughmap&srcid=1506964495&itemId=1506964495&q=선예담스파&urlX=502290.9999999989&urlY=1111174.0000000014"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        지도 크게 보기
                    </a>
                </div>
            </div>
        </div>
    )
}
