package com.willykez.dashboard.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.systemBarsPadding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Place
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalUriHandler
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

// ---- Edit your details here ----
private const val NAME = "Willykez"
private const val ROLE = "Android Developer"
private const val LOCATION = "Tanzania"
private const val ABOUT =
    "I build Android apps for East African users, crafting clean, fully programmatic " +
        "interfaces with Kotlin and Jetpack Compose."
private val SKILLS = listOf("Kotlin", "Java", "Jetpack Compose", "Material 3", "GitHub Actions", "Gemini AI")
private val STATS = listOf("Projects" to "12", "Repos" to "30+", "Years" to "3")
private const val GITHUB_URL = "https://github.com/Willykez"
private const val EMAIL = "mailto:hello@example.com"

@Composable
fun DashboardScreen() {
    Box(
        Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
            .systemBarsPadding()
    ) {
        Column(
            Modifier
                .verticalScroll(rememberScrollState())
                .padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(20.dp)
        ) {
            HeaderCard()
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                STATS.forEach { (label, value) ->
                    StatCard(label, value, Modifier.weight(1f))
                }
            }
            Section("About") {
                Text(
                    ABOUT,
                    style = MaterialTheme.typography.bodyLarge,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    lineHeight = 24.sp
                )
            }
            Section("Skills") { SkillChips() }
            Section("Links") {
                val uri = LocalUriHandler.current
                LinkRow(Icons.Filled.Star, "GitHub", "github.com/Willykez") { uri.openUri(GITHUB_URL) }
                Spacer(Modifier.height(4.dp))
                LinkRow(Icons.Filled.Email, "Email", "Get in touch") { uri.openUri(EMAIL) }
            }
        }
    }
}

@Composable
private fun HeaderCard() {
    val colors = MaterialTheme.colorScheme
    Box(
        Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(28.dp))
            .background(Brush.linearGradient(listOf(colors.primary, colors.tertiary)))
            .padding(24.dp)
    ) {
        Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
            Box(
                Modifier
                    .size(72.dp)
                    .clip(CircleShape)
                    .background(Color.White.copy(alpha = 0.25f)),
                contentAlignment = Alignment.Center
            ) {
                Text(NAME.first().toString(), fontSize = 32.sp, fontWeight = FontWeight.Bold, color = Color.White)
            }
            Spacer(Modifier.height(8.dp))
            Text(NAME, fontSize = 28.sp, fontWeight = FontWeight.Bold, color = Color.White)
            Text(ROLE, fontSize = 16.sp, color = Color.White.copy(alpha = 0.9f))
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(Icons.Filled.Place, null, tint = Color.White.copy(alpha = 0.9f), modifier = Modifier.size(16.dp))
                Spacer(Modifier.width(4.dp))
                Text(LOCATION, fontSize = 14.sp, color = Color.White.copy(alpha = 0.9f))
            }
        }
    }
}

@Composable
private fun StatCard(label: String, value: String, modifier: Modifier = Modifier) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(2.dp)
    ) {
        Column(
            Modifier
                .fillMaxWidth()
                .padding(vertical = 16.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(value, fontSize = 24.sp, fontWeight = FontWeight.Bold, color = MaterialTheme.colorScheme.primary)
            Text(label, fontSize = 12.sp, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable
private fun Section(title: String, content: @Composable () -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
        Text(title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.SemiBold)
        Card(
            Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(20.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
            elevation = CardDefaults.cardElevation(2.dp)
        ) {
            Column(Modifier.padding(16.dp)) { content() }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun SkillChips() {
    FlowRow(
        horizontalArrangement = Arrangement.spacedBy(8.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        SKILLS.forEach { skill ->
            Surface(shape = CircleShape, color = MaterialTheme.colorScheme.secondaryContainer) {
                Text(
                    skill,
                    modifier = Modifier.padding(horizontal = 14.dp, vertical = 7.dp),
                    fontSize = 13.sp,
                    color = MaterialTheme.colorScheme.onSecondaryContainer
                )
            }
        }
    }
}

@Composable
private fun LinkRow(icon: ImageVector, title: String, subtitle: String, onClick: () -> Unit) {
    Row(
        Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(12.dp))
            .clickable(onClick = onClick)
            .padding(vertical = 8.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            Modifier
                .size(40.dp)
                .clip(CircleShape)
                .background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center
        ) {
            Icon(icon, null, tint = MaterialTheme.colorScheme.primary)
        }
        Spacer(Modifier.width(12.dp))
        Column {
            Text(title, fontWeight = FontWeight.Medium)
            Text(subtitle, fontSize = 12.sp, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}
