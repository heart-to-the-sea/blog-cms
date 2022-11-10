import { useState } from "react"
import { useAppSelector } from "../../../utils/hooks"

export default function useTransformHandler () {
  const appContainer = useAppSelector(state => state.container.appContainer)
  return {}
}