import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";


test("renders empty array", () => {
    render(<Episodes episodes={[]}/>)
})

test("renders movie name", () => {
    const { getByText, queryByTestId } = render(<Episodes episodes={[{
        id: 553946 ,
        url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        name: "Chapter One: The Vanishing of Will Byers",
        season: 1,
        number: 1,
        airdate: "2016-07-15",
        airtime: "",
        airstamp: "2016-07-15T12:00:00+00:00",
        runtime: 60
    }]}/>)

    expect(getByText(/chapter one: the vanishing of will byers/i))
    .toBeInTheDocument()

    expect(queryByTestId(/episode-info/i)).toBeInTheDocument();

})