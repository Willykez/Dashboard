package com.willykez.dashboard

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import com.willykez.dashboard.ui.DashboardScreen
import com.willykez.dashboard.ui.DashboardTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            DashboardTheme {
                DashboardScreen()
            }
        }
    }
}
