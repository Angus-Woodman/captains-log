from rest_framework import serializers
from .models import Captains, MatchReport, SquadInfo, PlayerInfo, TeamInfo, TeamPlayers

class CaptainsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Captains
        fields = '__all__'

class MatchReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchReport
        fields = '__all__'

class SquadInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SquadInfo
        fields = '__all__'

class PlayerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerInfo
        fields = '__all__'

class TeamInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamInfo
        fields = '__all__'

class TeamPlayersSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamPlayers
        fields = '__all__'
