package com.test.jumpgame;

import org.junit.Test;

import static org.junit.Assert.*;

public class JumpGameTest
{
    public JumpGameTest(){}

    @Test
    public void testMinJumpNumber()
    {
        assertEquals(3, JumpGame.minJumpNumber(new int[]{1, 2, 1, 1, 1}));
        assertEquals(2, JumpGame.minJumpNumber(new int[]{2, 3, 1, 1, 4}));
        assertEquals(2, JumpGame.minJumpNumber(new int[]{2, 3, 0, 1, 4}));
        assertEquals(5, JumpGame.minJumpNumber(new int[]{5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5}));
    }
}