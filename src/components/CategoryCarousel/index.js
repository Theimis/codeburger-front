/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'

import Category from '../../assets/caegory.png'
import api from '../../services/api'
import { Container, CategoryImg, } from './style'


function CategoryCarousel() {
    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('categories')
            console.log(response)
        }
        loadCategories()
    }, [])
    return (
        <Container>
            <CategoryImg src={Category} alt='logo da categoria' />
        </Container>
    )
}

export default CategoryCarousel
