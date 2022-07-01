import { useCallback, useEffect, useState } from "react"
import GameItem from "components/molecules/GameItem"
import { getFeaturedGame } from "services/players"
import { GameItemTypes } from "services/players/data-types"

export default function FeaturedGame() {
  const [gameList, setGameList] = useState([])

  const getData = useCallback(async () => {
    const data = await getFeaturedGame()
    setGameList(data)
  }, [getFeaturedGame])

  useEffect(() => {
    getData()
  }, [])

  const BASE_IMG = process.env.NEXT_PUBLIC_BASE_IMG

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up">
            {gameList.map((item: GameItemTypes) => {
              return (
                <GameItem 
                  key={item._id}
                  id={item._id} 
                  title={item.name} 
                  category={item.category.name} 
                  thumbnail={`${BASE_IMG}/${item.thumbnail}`}
                />
              )
            })}
        </div>
      </div>
    </section>
  )
}
